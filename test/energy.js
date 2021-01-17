'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('Wh to Wh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Wh').to('Wh'), 1)
})

test('mWh to mWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mWh').to('mWh'), 1)
})

test('kWh to kWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kWh').to('kWh'), 1)
})

test('MWh to MWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MWh').to('MWh'), 1)
})

test('GWh to GWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GWh').to('GWh'), 1)
})

test('J to J', (t) => {
  t.plan(1)
  t.equals(convert(1).from('J').to('J'), 1)
})

test('kJ to kJ', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kJ').to('kJ'), 1)
})

test('Wh to J', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Wh').to('J'), 3600)
})

test('Wh to mWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Wh').to('mWh'), 1000)
})

test('Wh to kWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Wh').to('kWh'), 0.001)
})

test('Wh to MWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Wh').to('MWh'), 0.000001)
})

test('Wh to GWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('Wh').to('GWh'), 0.000000001)
})

test('GWh to mWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GWh').to('mWh'), 1000000000000)
})

test('GWh to J', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GWh').to('J'), 3600000000000)
})

test('MWh to mWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MWh').to('mWh'), 1000000000)
})

test('kWh to mWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kWh').to('mWh'), 1000000)
})

test('mWh to kWh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mWh').to('kWh'), 0.000001)
})

test('mWh to Wh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mWh').to('Wh'), 0.001)
})

test('kWh to Wh', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kWh').to('Wh'), 1000)
})

test('kWh to kJ', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kWh').to('kJ'), 3600)
})
