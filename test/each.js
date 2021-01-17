'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('ea to ea', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ea').to('ea'), 1)
})

test('dz to ea', (t) => {
  t.plan(1)
  t.equals(convert(1).from('dz').to('ea'), 12)
})

test('ea to dz', (t) => {
  t.plan(1)
  t.equals(convert(12).from('ea').to('dz'), 1)
})
