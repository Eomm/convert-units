'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('s to ns', (t) => {
  t.plan(1)
  const expected = 1000000000
  const actual = convert(1).from('s').to('ns')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('s to mu', (t) => {
  t.plan(1)
  t.equals(convert(1).from('s').to('mu'), 1000000)
})

test('s to ms', (t) => {
  t.plan(1)
  t.equals(convert(1).from('s').to('ms'), 1000)
})

test('s to m', (t) => {
  t.plan(1)
  t.equals(convert(60).from('s').to('min'), 1)
})

test('s to s', (t) => {
  t.plan(1)
  t.equals(convert(1).from('s').to('s'), 1)
})

test('s to h', (t) => {
  t.plan(1)
  t.equals(convert(3600).from('s').to('h'), 1)
})

test('s to d', (t) => {
  t.plan(1)
  t.equals(convert(86400).from('s').to('d'), 1)
})

test('d to week', (t) => {
  t.plan(1)
  t.equals(convert(7).from('d').to('week'), 1)
})

test('d to month', (t) => {
  t.plan(1)
  t.equals(convert(30.4375).from('d').to('month'), 1)
})

test('d to year', (t) => {
  t.plan(1)
  t.equals(convert(365.25).from('d').to('year'), 1)
})

test('week to month', (t) => {
  t.plan(1)
  const expected = 1
  const actual = convert(4.34821).from('week').to('month')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('week to year', (t) => {
  t.plan(1)
  const expected = 1
  const actual = convert(52.17857).from('week').to('year')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('month to year', (t) => {
  t.plan(1)
  t.equals(convert(12).from('month').to('year'), 1)
})
