'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('measures', function (t) {
  t.plan(1)
  const actual = convert().measures()
  const expected = ['length', 'area', 'mass', 'volume', 'each', 'temperature', 'time', 'digital', 'partsPer', 'speed', 'pace', 'pressure', 'current', 'voltage', 'power', 'reactivePower', 'apparentPower', 'energy', 'reactiveEnergy', 'volumeFlowRate', 'illuminance', 'frequency', 'angle', 'charge', 'force', 'acceleration']
  t.deepEquals(actual, expected)
})
