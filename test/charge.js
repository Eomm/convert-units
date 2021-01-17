'use strict'

const convert = require('../lib')
const { test } = require('tap')

const EPSILON = 0.000001

test('Co to Co', (t) => {
  t.plan(1)
  t.equals(convert(1).from('c').to('c'), 1)
})

test('Co to mC', (t) => {
  t.plan(1)
  t.equals(convert(1).from('c').to('mC'), 1000)
})

test('mC to Co', (t) => {
  t.plan(1)
  t.equals(convert(1).from('mC').to('c'), 1 / 1000)
})

test('Co to μC', (t) => {
  t.plan(1)
  t.equals(convert(1).from('c').to('μC'), 1000000)
})

test('μC to Co', (t) => {
  t.plan(1)
  t.equals(convert(1).from('μC').to('c'), 1 / 1000000)
})

test('Co to nC', (t) => {
  t.plan(1)
  t.equals(true, Math.abs(convert(1).from('c').to('nC') - 1e9) < EPSILON)
})

test('nC to Co', (t) => {
  t.plan(1)
  t.equals(convert(1).from('nC').to('c'), 1e-9)
})

test('Co to pC', (t) => {
  t.plan(1)
  t.equals(convert(1).from('c').to('pC'), 1e12)
})

test('pC to Co', (t) => {
  t.plan(1)
  t.equals(convert(1).from('pC').to('c'), 1e-12)
})
