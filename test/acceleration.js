'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('g to m/s2', (t) => {
  t.plan(1)
  t.equals(convert(1).from('g-force').to('m/s2'), 9.80665)
})

test('m/s2 to g', (t) => {
  t.plan(1)
  t.equals(convert(9.80665).from('m/s2').to('g-force'), 1)
})
