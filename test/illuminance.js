'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('ft-cd to lx', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ft-cd').to('lx'), 10.76391)
})

test('lx to ft-cd', (t) => {
  t.plan(1)
  t.equals(convert(1).from('lx').to('ft-cd'), 0.09290304359661128)
})
