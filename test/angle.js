'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('rad to rad', (t) => {
  t.plan(1)
  t.equals(convert(1).from('rad').to('rad'), 1)
})

test('deg to deg', (t) => {
  t.plan(1)
  t.equals(convert(1).from('deg').to('deg'), 1)
})

test('grad to grad', (t) => {
  t.plan(1)
  t.equals(convert(1).from('grad').to('grad'), 1)
})

test('arcmin to arcmin', (t) => {
  t.plan(1)
  t.equals(convert(1).from('arcmin').to('arcmin'), 1)
})

test('arcsec to arcsec', (t) => {
  t.plan(1)
  t.equals(convert(1).from('arcsec').to('arcsec'), 1)
})

test('deg to rad', (t) => {
  t.plan(1)
  const expected = 6.28319
  const actual = convert(360).from('deg').to('rad')
  t.ok(percentError(expected, actual) < ACCURACY, 'Expected: ' + expected + ', Actual: ' + actual)
})

test('deg to grad', (t) => {
  t.plan(1)
  t.equals(convert(360).from('deg').to('grad'), 400)
})

test('deg to arcmin', (t) => {
  t.plan(1)
  t.equals(convert(360).from('deg').to('arcmin'), 21600)
})

test('deg to arcsec', (t) => {
  t.plan(1)
  t.equals(convert(360).from('deg').to('arcsec'), 1.296e+6)
})

test('rad to grad', (t) => {
  t.plan(1)
  const expected = 636.62
  const actual = convert(10).from('rad').to('grad')
  t.ok(percentError(expected, actual) < ACCURACY, 'Expected: ' + expected + ', Actual: ' + actual)
})

test('rad to arcsec', (t) => {
  t.plan(1)
  const expected = 2.063e+6
  const actual = convert(10).from('rad').to('arcsec')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('grad to arcmin', (t) => {
  t.plan(1)
  t.equals(convert(5).from('grad').to('arcmin'), 270)
})

test('grad to deg', (t) => {
  t.plan(1)
  t.equals(convert(5).from('grad').to('deg'), 4.5)
})

test('arcmin to rad', (t) => {
  t.plan(1)
  const expected = 2.908882
  const actual = convert(10000).from('arcmin').to('rad')
  t.ok(percentError(expected, actual) < ACCURACY, 'Expected: ' + expected + ', Actual: ' + actual)
})
