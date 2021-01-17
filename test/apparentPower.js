'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('VA to VA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VA').to('VA'), 1)
})

test('mVA to mVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVA').to('mVA'), 1)
})

test('kVA to kVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVA').to('kVA'), 1)
})

test('MVA to MVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MVA').to('MVA'), 1)
})

test('GVA to GVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GVA').to('GVA'), 1)
})

test('VA to mVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VA').to('mVA'), 1000)
})

test('VA to kVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VA').to('kVA'), 0.001)
})

test('VA to MVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VA').to('MVA'), 0.000001)
})

test('VA to GVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('VA').to('GVA'), 0.000000001)
})

test('GVA to mVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('GVA').to('mVA'), 1000000000000)
})

test('MVA to mVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('MVA').to('mVA'), 1000000000)
})

test('kVA to mVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVA').to('mVA'), 1000000)
})

test('mVA to kVA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVA').to('kVA'), 0.000001)
})

test('mVA to VA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mVA').to('VA'), 0.001)
})

test('kVA to VA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kVA').to('VA'), 1000)
})
