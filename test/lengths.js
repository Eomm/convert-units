'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('ft to ft', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft').to('ft'), 1)
})

test('ft to ft-us', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft').to('ft-us'), 0.999998000004)
})

test('ft-us to ft', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft-us').to('ft'), 1.000002)
})

test('in to in', (t) => {
  t.plan(1)
  t.equals(convert(7).from('in').to('in'), 7)
})

test('ft to in', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft').to('in'), 12)
})

test('in to ft', (t) => {
  t.plan(1)
  t.equals(convert(1).from('in').to('ft'), 1 / 12)
})

test('ft to mi', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft').to('mi'), 1 / 5280)
})

test('mi to ft', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mi').to('ft'), 5280)
})

test('nMi to mi', (t) => {
  t.plan(1)
  t.equals(convert(1).from('nMi').to('mi'), 1.150780303030303)
})

test('m to m', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m').to('m'), 1)
})

test('m to cm', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m').to('cm'), 100)
})

test('cm to m', (t) => {
  t.plan(1)
  t.equals(convert(1).from('cm').to('m'), 1 / 100)
})

test('m to mm', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m').to('mm'), 1000)
})

test('km to m', (t) => {
  t.plan(1)
  t.equals(convert(1).from('km').to('m'), 1000)
})

// When converting between systems, expect < 0.1% error
test('m to ft', (t) => {
  t.plan(1)
  const expected = 3.28084
  const actual = convert(1).from('m').to('ft')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

// When converting between systems, expect < 0.1% error
test('m to ft-us', (t) => {
  t.plan(1)
  const expected = 3.28084
  const actual = convert(1).from('m').to('ft-us')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('mm to ft', (t) => {
  t.plan(1)
  const expected = 0.00328084
  const actual = convert(1).from('mm').to('ft')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('nMi to m', (t) => {
  t.plan(1)
  const expected = 1852
  const actual = convert(1).from('nMi').to('m')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('km to nMi', (t) => {
  t.plan(1)
  const expected = 0.539956803
  const actual = convert(1).from('km').to('nMi')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('fathm to m', (t) => {
  t.plan(1)
  const expected = 1.8288
  const actual = convert(1).from('fathom').to('m')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})
