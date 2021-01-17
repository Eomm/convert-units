'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('Pa to Pa', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Pa').to('Pa'), 1)
})

test('Pa to kPa', (t) => {
  t.plan(1)
  t.equals(convert(2000).from('Pa').to('kPa'), 2)
})

test('kPa to Pa', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kPa').to('Pa'), 1000)
})

test('kPa to hPa', (t) => {
  t.plan(1)
  t.equals(convert(20).from('kPa').to('hPa'), 200)
})

test('kPa to MPa', (t) => {
  t.plan(1)
  t.equals(convert(8000).from('kPa').to('MPa'), 8)
})

test('kPa to bar', (t) => {
  t.plan(1)
  t.equals(convert(6000).from('kPa').to('bar'), 60)
})

test('kPa to torr', (t) => {
  t.plan(1)
  const expected = 3990.33
  const actual = convert(532).from('kPa').to('torr')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('psi to psi', (t) => {
  t.plan(1)
  t.equals(convert(10).from('psi').to('psi'), 10)
})

test('psi to ksi', (t) => {
  t.plan(1)
  t.equals(convert(10000).from('psi').to('ksi'), 10)
})

test('Pa to psi', (t) => {
  t.plan(2)
  const expected = 1.450377
  const actual = convert(10000).from('Pa').to('psi')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
  t.equals(convert(1).from('GB').to('B'), 1073741824)
})

test('torr to ksi', (t) => {
  t.plan(1)
  const expected = 1
  const actual = convert(51714.931860168974).from('torr').to('ksi')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('psi to hPa', (t) => {
  t.plan(1)
  const expected = 689.47573
  const actual = convert(10).from('psi').to('hPa')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})
