const convert = require('../lib')
const assert = require('assert')
const tests = {}

tests.measures = function () {
  const actual = convert().measures()
  const expected = ['length', 'area', 'mass', 'volume', 'each', 'temperature', 'time', 'digital', 'partsPer', 'speed', 'pace', 'pressure', 'current', 'voltage', 'power', 'reactivePower', 'apparentPower', 'energy', 'reactiveEnergy', 'volumeFlowRate', 'illuminance', 'frequency', 'angle', 'charge', 'force', 'acceleration']
  assert.deepEqual(actual, expected)
}

module.exports = tests
