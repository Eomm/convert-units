'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('m/s to m/s', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m/s').to('m/s'), 1)
})

test('m/s to km/h', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m/s').to('km/h'), 3.6)
})

test('m/h to m/h', (t) => {
  t.plan(1)
  t.equals(convert(6).from('m/h').to('m/h'), 6)
})

test('m/h to knot', (t) => {
  t.plan(1)
  const expected = 1.73795
  const actual = convert(2).from('m/h').to('knot')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('m/h to ft/s', (t) => {
  t.plan(1)
  const expected = 4.4
  const actual = convert(3).from('m/h').to('ft/s')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('m/s to m/h', (t) => {
  t.plan(1)
  const expected = 22.3694
  const actual = convert(10).from('m/s').to('m/h')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('m/s to knot', (t) => {
  t.plan(1)
  const expected = 15.5508
  const actual = convert(8).from('m/s').to('knot')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('m/h to km/h', (t) => {
  t.plan(1)
  const expected = 19.3121
  const actual = convert(12).from('m/h').to('km/h')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})
