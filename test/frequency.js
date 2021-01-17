'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('Hz to Hz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Hz').to('Hz'), 1)
})

test('mHz to mHz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mHz').to('mHz'), 1)
})

test('kHz to kHz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kHz').to('kHz'), 1)
})

test('MHz to MHz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MHz').to('MHz'), 1)
})

test('GHz to GHz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GHz').to('GHz'), 1)
})

test('THz to THz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('THz').to('THz'), 1)
})

test('rpm to rpm', (t) => {
  t.plan(1)
  t.equals(convert(1).from('rpm').to('rpm'), 1)
})

test('deg/s to deg/s', (t) => {
  t.plan(1)
  t.equals(convert(1).from('deg/s').to('deg/s'), 1)
})

test('rad/s to rad/s', (t) => {
  t.plan(1)
  t.equals(convert(1).from('rad/s').to('rad/s'), 1)
})

test('rpm to Hz', (t) => {
  t.plan(1)
  t.equals(convert(60).from('rpm').to('Hz'), 1)
})

test('deg/s to Hz', (t) => {
  t.plan(1)
  t.equals(convert(360).from('deg/s').to('Hz'), 1)
})

test('rad/s to Hz', (t) => {
  t.plan(1)
  t.equals(convert(Math.PI).from('rad/s').to('Hz'), 0.5)
})

test('THz to GHz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('THz').to('GHz'), 1000)
})

test('mHz to MHz', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mHz').to('MHz'), 0.000000001)
})
