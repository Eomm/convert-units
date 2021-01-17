'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('V to V', (t) => {
  t.plan(1)
  t.equals(convert(1).from('V').to('V'), 1)
})

test('mV to mV', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mV').to('mV'), 1)
})

test('kV to kV', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kV').to('kV'), 1)
})

test('V to mV', (t) => {
  t.plan(1)
  t.equals(convert(1).from('V').to('mV'), 1000)
})

test('V to kV', (t) => {
  t.plan(1)
  t.equals(convert(1).from('V').to('kV'), 0.001)
})

test('kV to mV', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kV').to('mV'), 1000000)
})

test('mV to kV', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mV').to('kV'), 0.000001)
})

test('mV to V', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mV').to('V'), 0.001)
})

test('kV to V', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kV').to('V'), 1000)
})
