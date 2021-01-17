'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('A to A', (t) => {
  t.plan(1)
  t.equals(convert(1).from('A').to('A'), 1)
})

test('mA to mA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mA').to('mA'), 1)
})

test('kA to kA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kA').to('kA'), 1)
})

test('A to mA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('A').to('mA'), 1000)
})

test('A to kA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('A').to('kA'), 0.001)
})

test('kA to mA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kA').to('mA'), 1000000)
})

test('mA to kA', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mA').to('kA'), 0.000001)
})

test('mA to A', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mA').to('A'), 0.001)
})

test('kA to A', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kA').to('A'), 1000)
})
