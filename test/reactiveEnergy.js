'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('VARh to VARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VARh').to('VARh'), 1)
})

test('mVARh to mVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVARh').to('mVARh'), 1)
})

test('kVARh to kVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVARh').to('kVARh'), 1)
})

test('MVARh to MVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MVARh').to('MVARh'), 1)
})

test('GVARh to GVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GVARh').to('GVARh'), 1)
})

test('VARh to mVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VARh').to('mVARh'), 1000)
})

test('VARh to kVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VARh').to('kVARh'), 0.001)
})

test('VARh to MVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VARh').to('MVARh'), 0.000001)
})

test('VARh to GVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VARh').to('GVARh'), 0.000000001)
})

test('GVARh to mVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GVARh').to('mVARh'), 1000000000000)
})

test('MVARh to mVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MVARh').to('mVARh'), 1000000000)
})

test('kVARh to mVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVARh').to('mVARh'), 1000000)
})

test('mVARh to kVARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVARh').to('kVARh'), 0.000001)
})

test('mVARh to VARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVARh').to('VARh'), 0.001)
})

test('kVARh to VARh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVARh').to('VARh'), 1000)
})
