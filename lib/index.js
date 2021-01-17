'use strict'

// TODO build a new structure to optimize search
const measures = {
  length: require('./definitions/length'),
  area: require('./definitions/area'),
  mass: require('./definitions/mass'),
  volume: require('./definitions/volume'),
  each: require('./definitions/each'),
  temperature: require('./definitions/temperature'),
  time: require('./definitions/time'),
  digital: require('./definitions/digital'),
  partsPer: require('./definitions/partsPer'),
  speed: require('./definitions/speed'),
  pace: require('./definitions/pace'),
  pressure: require('./definitions/pressure'),
  current: require('./definitions/current'),
  voltage: require('./definitions/voltage'),
  power: require('./definitions/power'),
  reactivePower: require('./definitions/reactivePower'),
  apparentPower: require('./definitions/apparentPower'),
  energy: require('./definitions/energy'),
  reactiveEnergy: require('./definitions/reactiveEnergy'),
  volumeFlowRate: require('./definitions/volumeFlowRate'),
  illuminance: require('./definitions/illuminance'),
  frequency: require('./definitions/frequency'),
  angle: require('./definitions/angle'),
  charge: require('./definitions/charge'),
  force: require('./definitions/force'),
  acceleration: require('./definitions/acceleration')
}

function Converter (numerator) {
  this.val = numerator
}

/**
* Lets the converter know the source unit abbreviation
*/
Converter.prototype.from = function (from) {
  this.origin = this.getUnit(from)

  if (!this.origin) {
    this.throwUnsupportedUnitError(from)
  }

  return this
}

/**
* Converts the unit and returns the value
*/
Converter.prototype.to = function (to) {
  if (!this.origin) { throw new Error('.to must be called after .from') }

  this.destination = this.getUnit(to)

  let result
  let transform

  if (!this.destination) {
    this.throwUnsupportedUnitError(to)
  }

  // Don't change the value if origin and destination are the same
  if (this.origin.abbr === this.destination.abbr) {
    return this.val
  }

  // You can't go from liquid to mass, for example
  if (this.destination.measure !== this.origin.measure) {
    throw new Error('Cannot convert incompatible measures of ' +
      this.destination.measure + ' and ' + this.origin.measure)
  }

  /**
  * Convert from the source value to its anchor inside the system
  */
  result = this.val * this.origin.unit.to_anchor

  /**
  * For some changes it's a simple shift (C to K)
  * So we'll add it when convering into the unit (later)
  * and subtract it when converting from the unit
  */
  if (this.origin.unit.anchor_shift) {
    result -= this.origin.unit.anchor_shift
  }

  /**
  * Convert from one system to another through the anchor ratio. Some conversions
  * aren't ratio based or require more than a simple shift. We can provide a custom
  * transform here to provide the direct result
  */
  if (this.origin.system !== this.destination.system) {
    transform = measures[this.origin.measure]._anchors[this.origin.system].transform
    if (typeof transform === 'function') {
      result = transform(result)
    } else {
      result *= measures[this.origin.measure]._anchors[this.origin.system].ratio
    }
  }

  /**
  * This shift has to be done after the system conversion business
  */
  if (this.destination.unit.anchor_shift) {
    result += this.destination.unit.anchor_shift
  }

  /**
  * Convert to another unit inside the destination system
  */
  return result / this.destination.unit.to_anchor
}

/**
* Converts the unit to the best available unit.
*/
Converter.prototype.toBest = function (opts) {
  if (!this.origin) {
    throw new Error('.toBest must be called after .from')
  }

  const options = Object.assign({
    exclude: [],
    cutOffNumber: 1
  }, opts)

  let best
  /**
    Looks through every possibility for the 'best' available unit.
    i.e. Where the value has the fewest numbers before the decimal point,
    but is still higher than 1.
  */
  for (const possibility of this.possibilities()) {
    const unit = this.describe(possibility)
    const isIncluded = options.exclude.indexOf(possibility) === -1

    if (isIncluded && unit.system === this.origin.system) {
      const result = this.to(possibility)
      if (!best || (result >= options.cutOffNumber && result < best.val)) {
        best = {
          val: result,
          unit: possibility,
          singular: unit.singular,
          plural: unit.plural
        }
      }
    }
  }

  return best
}

/**
* Finds the unit
*/
Converter.prototype.getUnit = function (abbr) {
  for (const [measure, systems] of Object.entries(measures)) {
    for (const [system, units] of Object.entries(systems)) {
      if (system === '_anchors') { continue }
      for (const [testAbbr, unit] of Object.entries(units)) {
        if (testAbbr === abbr) {
          return {
            abbr: abbr,
            measure: measure,
            system: system,
            unit: unit
          }
        }
      }
    }
  }

  return false
}

const describe = function (resp) {
  return {
    abbr: resp.abbr,
    measure: resp.measure,
    system: resp.system,
    singular: resp.unit.name.singular,
    plural: resp.unit.name.plural
  }
}

/**
* An alias for getUnit
*/
Converter.prototype.describe = function (abbr) {
  const resp = this.getUnit(abbr)
  try {
    return describe(resp)
  } catch (err) {
    this.throwUnsupportedUnitError(abbr)
  }
}

/**
* Detailed list of all supported units
*/
Converter.prototype.list = function (filterMeasure) {
  const list = []
  for (const [measure, systems] of Object.entries(measures)) {
    if (filterMeasure && filterMeasure !== measure) { continue }
    for (const [system, units] of Object.entries(systems)) {
      if (system === '_anchors') { continue }
      for (const [abbr, unit] of Object.entries(units)) {
        list.push(describe({
          abbr: abbr,
          measure: measure,
          system: system,
          unit: unit
        }))
      }
    }
  }

  return list
}

Converter.prototype.throwUnsupportedUnitError = function (what) {
  let validUnits = []

  for (const systems of Object.values(measures)) {
    for (const [system, units] of Object.entries(systems)) {
      if (system === '_anchors') { continue }
      validUnits = validUnits.concat(Object.keys(units))
    }
  }

  throw new Error('Unsupported unit ' + what + ', use one of: ' + validUnits.join(', '))
}

/**
* Returns the abbreviated measures that the value can be
* converted to.
*/
Converter.prototype.possibilities = function (measure) {
  let possibilities = []
  if (!this.origin && !measure) {
    for (const systems of Object.values(measures)) {
      for (const [system, units] of Object.entries(systems)) {
        if (system === '_anchors') { continue }
        possibilities = possibilities.concat(Object.keys(units))
      }
    }
  } else {
    measure = measure || this.origin.measure
    for (const [system, units] of Object.entries(measures[measure])) {
      if (system === '_anchors') { continue }
      possibilities = possibilities.concat(Object.keys(units))
    }
  }
  return possibilities
}

/**
* Returns the abbreviated measures that the value can be
* converted to.
*/
Converter.prototype.measures = function () {
  return Object.keys(measures)
}

module.exports = function factory (value) {
  return new Converter(value)
}
