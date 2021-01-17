'use strict'

const convert = require('../lib')
const { test } = require('tap')

const EPSILON = 0.000001

test('N to kN', (t) => {
  t.plan(1)
  t.equals(convert(1).from('N').to('kN'), 1 / 1000)
})

test('kN to N', (t) => {
  t.plan(1)
  t.equals(convert(1).from('kN').to('N'), 1000)
})

test('N to lbf', (t) => {
  t.plan(1)
  t.equals(true, Math.abs(convert(1).from('N').to('lbf') - 0.224809) < EPSILON)
})

test('lbf to N', (t) => {
  t.plan(1)
  t.equals(convert(1).from('lbf').to('N'), 4.44822)
})
