'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('W to W', (t) => {
  t.plan(1)
  t.equals(convert(1).from('W').to('W'), 1)
})

test('mW to mW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mW').to('mW'), 1)
})

test('kW to kW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kW').to('kW'), 1)
})

test('MW to MW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MW').to('MW'), 1)
})

test('GW to GW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GW').to('GW'), 1)
})

test('W to mW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('W').to('mW'), 1000)
})

test('W to kW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('W').to('kW'), 0.001)
})

test('W to MW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('W').to('MW'), 0.000001)
})

test('W to GW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('W').to('GW'), 0.000000001)
})

test('GW to mW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GW').to('mW'), 1000000000000)
})

test('MW to mW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MW').to('mW'), 1000000000)
})

test('kW to mW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kW').to('mW'), 1000000)
})

test('mW to kW', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mW').to('kW'), 0.000001)
})

test('mW to W', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mW').to('W'), 0.001)
})

test('kW to W', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kW').to('W'), 1000)
})
