'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('get kg', (t) => {
  t.plan(1)
  const actual = convert().describe('kg')
  const expected = {
    abbr: 'kg',
    measure: 'mass',
    system: 'metric',
    singular: 'Kilogram',
    plural: 'Kilograms'
  }

  t.deepEquals(actual, expected)
})

test('get ac', (t) => {
  t.plan(1)
  const actual = convert().describe('ac')
  const expected = {
    abbr: 'ac',
    measure: 'area',
    system: 'imperial',
    singular: 'Acre',
    plural: 'Acres'
  }

  t.deepEquals(actual, expected)
})
