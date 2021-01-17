'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('ft2 to ft2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft2').to('ft2'), 1)
})

test('ft2 to in2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft2').to('in2'), 144)
})

test('in2 to ft2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('in2').to('ft2'), 1 / 144)
})

test('ft2 to ac', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft2').to('ac'), 1 / 43560)
})

test('ac to ft2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ac').to('ft2'), 43560)
})

test('ft2 to mi2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft2').to('mi2'), 1 / 27878400)
})

test('mi2 to ft2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mi2').to('ft2'), 27878400)
})

test('m2 to m2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m2').to('m2'), 1)
})

test('m2 to cm2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m2').to('cm2'), 10000)
})

test('cm2 to m2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('cm2').to('m2'), 1 / 10000)
})

test('m2 to mm2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m2').to('mm2'), 1000000)
})

test('ha to m2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ha').to('m2'), 10000)
})

test('km2 to m2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('km2').to('m2'), 1000000)
})

// When converting between systems, expect < 0.1% error
test('m2 to ft2', (t) => {
  t.plan(1)
  const expected = 10.7639
  const actual = convert(1).from('m2').to('ft2')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('mm2 to ft2', (t) => {
  t.plan(1)
  const expected = 1.07639e-5
  const actual = convert(1).from('mm2').to('ft2')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})
