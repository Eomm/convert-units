'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('C to K', (t) => {
  t.plan(1)
  t.equals(convert(0).from('C').to('K'), 273.15)
})

test('K to C', (t) => {
  t.plan(1)
  t.equals(convert(273.15).from('K').to('C'), 0)
})

test('F to C', (t) => {
  t.plan(1)
  t.equals(convert(32).from('F').to('C'), 0)
})

test('C to F', (t) => {
  t.plan(1)
  t.equals(convert(0).from('C').to('F'), 32)
})

test('F to K', (t) => {
  t.plan(1)
  t.equals(convert(32).from('F').to('K'), 273.15)
})

test('F to R', (t) => {
  t.plan(1)
  t.equals(convert(100).from('F').to('R'), 559.6700000000001)
})

test('R to F', (t) => {
  t.plan(1)
  t.equals(convert(670).from('R').to('F'), 210.32999999999998)
})

test('R to C', (t) => {
  t.plan(1)
  t.equals(convert(612).from('R').to('C'), 66.85)
})

test('R to K', (t) => {
  t.plan(1)
  t.equals(convert(459.67).from('R').to('K'), 255.3722222222222)
})
