'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('best mm', (t) => {
  t.plan(1)
  const actual = convert(1200).from('mm').toBest()
  const expected = {
    val: 1.2,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters'
  }

  t.deepEqual(actual, expected)
})

test('excludes measurements', (t) => {
  t.plan(1)
  const actual = convert(1200000).from('mm').toBest({ exclude: ['km', 'm'] })
  const expected = {
    val: 12000,
    unit: 'dm',
    singular: 'Decimeter',
    plural: 'Decimeters'
  }

  t.deepEqual(actual, expected)
})

test('does not break when excluding from measurement', (t) => {
  t.plan(1)
  const actual = convert(10).from('km').toBest({ exclude: ['km'] })
  const expected = {
    val: 10000,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters'
  }

  t.deepEquals(actual, expected)
})

test('if all measurements are excluded return from', (t) => {
  t.plan(1)
  const actual = convert(10).from('km').toBest({ exclude: ['mm, cm, m, km'] })
  const expected = {
    val: 10,
    unit: 'km',
    singular: 'Kilometer',
    plural: 'Kilometers'
  }

  t.deepEquals(actual, expected)
})

test('pre-cut off number', (t) => {
  t.plan(1)
  const actual = convert(9000).from('mm').toBest({ cutOffNumber: 10 })
  const expected = {
    val: 90,
    unit: 'dm',
    singular: 'Decimeter',
    plural: 'Decimeters'
  }

  t.deepEquals(actual, expected)
})

test('post-cut off number', (t) => {
  t.plan(1)
  const actual = convert(10000).from('mm').toBest({ cutOffNumber: 10 })
  const expected = {
    val: 10,
    unit: 'm',
    singular: 'Meter',
    plural: 'Meters'
  }

  t.deepEquals(actual, expected)
})
