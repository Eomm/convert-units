'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('ppm to ppm', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppm').to('ppm'), 1)
})

test('ppb to ppb', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppb').to('ppb'), 1)
})

test('ppm to ppb', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppm').to('ppb'), 1000)
})

test('ppb to ppm', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppb').to('ppm'), 0.001)
})

test('ppt to ppt', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppt').to('ppt'), 1)
})

test('ppm to ppt', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppm').to('ppt'), 1000000)
})

test('ppt to ppb', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppt').to('ppb'), 0.001)
})

test('ppt to ppm', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppt').to('ppm'), 0.000001)
})

test('ppq to ppq', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppq').to('ppq'), 1)
})

test('ppq to ppt', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppq').to('ppt'), 0.001)
})

test('ppq to ppm', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ppq').to('ppm'), 0.000000001)
})
