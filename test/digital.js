'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('b to b', (t) => {
  t.plan(1)
  t.equals(convert(1).from('b').to('b'), 1)
})

test('Kb to b', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Kb').to('b'), 1024)
})

test('Mb to b', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Mb').to('b'), 1048576)
})

test('Gb to b', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Gb').to('b'), 1073741824)
})

test('Tb to b', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Tb').to('b'), 1099511627776)
})

test('B to B', (t) => {
  t.plan(1)
  t.equals(convert(1).from('B').to('B'), 1)
})

test('KB to B', (t) => {
  t.plan(1)
  t.equals(convert(1).from('KB').to('B'), 1024)
})

test('MB to B', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MB').to('B'), 1048576)
})

test('GB to B', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GB').to('B'), 1073741824)
})

test('TB to B', (t) => {
  t.plan(1)
  t.equals(convert(1).from('TB').to('B'), 1099511627776)
})

// When converting between systems, expect < 0.1% error
test('B to b', (t) => {
  t.plan(1)
  const expected = 8
  const actual = convert(1).from('B').to('b')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('b to B', (t) => {
  t.plan(1)
  const expected = 0.125
  const actual = convert(1).from('b').to('B')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})
