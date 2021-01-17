'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('VAR to VAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VAR').to('VAR'), 1)
})

test('mVAR to mVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVAR').to('mVAR'), 1)
})

test('kVAR to kVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVAR').to('kVAR'), 1)
})

test('MVAR to MVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MVAR').to('MVAR'), 1)
})

test('GVAR to GVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GVAR').to('GVAR'), 1)
})

test('VAR to mVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VAR').to('mVAR'), 1000)
})

test('VAR to kVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VAR').to('kVAR'), 0.001)
})

test('VAR to MVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VAR').to('MVAR'), 0.000001)
})

test('VAR to GVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VAR').to('GVAR'), 0.000000001)
})

test('GVAR to mVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GVAR').to('mVAR'), 1000000000000)
})

test('MVAR to mVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MVAR').to('mVAR'), 1000000000)
})

test('kVAR to mVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVAR').to('mVAR'), 1000000)
})

test('mVAR to kVAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVAR').to('kVAR'), 0.000001)
})

test('mVAR to VAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVAR').to('VAR'), 0.001)
})

test('kVAR to VAR', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVAR').to('VAR'), 1000)
})
