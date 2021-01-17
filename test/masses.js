'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('lb to lb', (t) => {
  t.plan(1)
  t.equals(convert(1).from('lb').to('lb'), 1)
})

test('lb to oz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('lb').to('oz'), 16)
})

test('oz to lb', (t) => {
  t.plan(1)
  t.equals(convert(1).from('oz').to('lb'), 1 / 16)
})

test('oz to oz', (t) => {
  t.plan(1)
  t.equals(convert(6).from('oz').to('oz'), 6)
})

test('kg to kg', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kg').to('kg'), 1)
})

test('kg to g', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kg').to('g'), 1000)
})

test('g to kg', (t) => {
  t.plan(1)
  t.equals(convert(1).from('g').to('kg'), 1 / 1000)
})

test('g to g', (t) => {
  t.plan(1)
  t.equals(convert(100).from('g').to('g'), 100)
})

// When converting between systems, expect < 0.1% error
test('kg to lb', (t) => {
  t.plan(1)
  const expected = 0.453592
  const actual = convert(1).from('lb').to('kg')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('g to lb', (t) => {
  t.plan(1)
  const expected = 0.00220462
  const actual = convert(1).from('g').to('lb')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('lb to g', (t) => {
  t.plan(1)
  const expected = 1360.78
  const actual = convert(3).from('lb').to('g')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('g to lb', (t) => {
  t.plan(1)
  const expected = 3
  const actual = convert(1360.78).from('g').to('lb')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})
