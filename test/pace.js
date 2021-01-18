'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('s/m to s/m', (t) => {
  t.plan(1)
  t.equals(convert(1).from('s/m').to('s/m'), 1)
})

test('s/m to min/km', (t) => {
  t.plan(1)
  const expected = 16.6667
  const actual = convert(1).from('s/m').to('min/km')
  t.ok(percentError(expected, actual) < ACCURACY, `Expected: ${expected}, Actual: ${actual}`)
})

test('s/ft to s/ft', (t) => {
  t.plan(1)
  t.equals(convert(1).from('s/ft').to('s/ft'), 1)
})

test('min/mi to s/ft', (t) => {
  t.plan(1)
  t.equals(convert(1).from('min/mi').to('s/ft'), 0.0113636)
})

test('min/mi to min/km', (t) => {
  t.plan(1)
  const expected = 0.621371
  const actual = convert(1).from('min/mi').to('min/km')
  t.ok(percentError(expected, actual) < ACCURACY, `Expected: ${expected}, Actual: ${actual}`)
})

test('min/km to min/mi', (t) => {
  t.plan(1)
  const expected = 1.60934
  const actual = convert(1).from('min/km').to('min/mi')
  t.ok(percentError(expected, actual) < ACCURACY, `Expected: ${expected}, Actual: ${actual}`)
})

test('min/km to s/mi', (t) => {
  t.plan(1)
  const expected = 482.8032
  const actual = convert(5).from('min/km').to('s/mi')
  t.ok(percentError(expected, actual) < ACCURACY, `Expected: ${expected}, Actual: ${actual}`)
})

test('min/mi to s/mi', (t) => {
  t.plan(1)
  const expected = 60
  const actual = convert(1).from('min/mi').to('s/mi')
  t.ok(percentError(expected, actual) < ACCURACY, `Expected: ${expected}, Actual: ${actual}`)
})
