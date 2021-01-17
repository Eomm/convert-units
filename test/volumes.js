'use strict'

const convert = require('../lib')
const { test } = require('tap')

const ACCURACY = 1 / 1000
const percentError = require('../lib/percentError')

test('l to l', (t) => {
  t.plan(1)
  t.equals(convert(2).from('l').to('l'), 2)
})

test('mm3 to l', (t) => {
  t.plan(1)
  t.equals(convert(1000000).from('mm3').to('l'), 1)
})

test('cm3 to l', (t) => {
  t.plan(1)
  t.equals(convert(100).from('cm3').to('l'), 1 / 10)
})

test('dl to l', (t) => {
  t.plan(1)
  t.equals(convert(2).from('dl').to('l'), 0.2)
})

test('cl to l', (t) => {
  t.plan(1)
  t.equals(convert(25).from('cl').to('l'), 0.25)
})

test('ml to l', (t) => {
  t.plan(1)
  t.equals(convert(100).from('ml').to('l'), 1 / 10)
})

test('m3 to l', (t) => {
  t.plan(1)
  t.equals(convert(1).from('m3').to('l'), 1000)
})

test('km3 to l', (t) => {
  t.plan(1)
  t.equals(convert(1).from('km3').to('l'), 1000000000000)
})

test('l to ml', (t) => {
  t.plan(1)
  t.equals(convert(1).from('l').to('ml'), 1000)
})

test('dl to ml', (t) => {
  t.plan(1)
  t.equals(convert(10).from('dl').to('ml'), 1000)
})

test('cl to ml', (t) => {
  t.plan(1)
  t.equals(convert(100).from('cl').to('ml'), 1000)
})

test('ml to ml', (t) => {
  t.plan(1)
  t.equals(convert(13).from('ml').to('ml'), 13)
})

test('msk to ml', (t) => {
  t.plan(1)
  t.equals(convert(2).from('msk').to('ml'), 30)
})

test('tsk to ml', (t) => {
  t.plan(1)
  t.equals(convert(3).from('tsk').to('ml'), 15)
})

test('krm to ml', (t) => {
  t.plan(1)
  t.equals(convert(13).from('krm').to('ml'), 13)
})

test('kanna to l', (t) => {
  t.plan(1)
  t.equals(convert(2).from('kanna').to('l'), 2 * 2.617)
})

test('kkp to ml', (t) => {
  t.plan(1)
  t.equals(convert(2).from('kkp').to('ml'), 300)
})

test('glas to ml', (t) => {
  t.plan(1)
  t.equals(convert(2).from('glas').to('ml'), 400)
})

test('ml to msk', (t) => {
  t.plan(1)
  t.equals(convert(15).from('ml').to('msk'), 1)
})

test('ml to tsk', (t) => {
  t.plan(1)
  t.equals(convert(5).from('ml').to('tsk'), 1)
})

test('ml to krm', (t) => {
  t.plan(1)
  t.equals(convert(1).from('ml').to('krm'), 1)
})

test('l to kanna', (t) => {
  t.plan(1)
  t.equals(convert(2.617).from('l').to('kanna'), 1)
})

test('lm to kkp', (t) => {
  t.plan(1)
  t.equals(convert(150).from('ml').to('kkp'), 1)
})

test('ml to glas', (t) => {
  t.plan(1)
  t.equals(convert(200).from('ml').to('glas'), 1)
})

test('fl-oz to fl-oz', (t) => {
  t.plan(1)
  t.equals(convert(62).from('fl-oz').to('fl-oz'), 62)
})

test('fl-oz to tbsp', (t) => {
  t.plan(1)
  t.equals(convert(4).from('fl-oz').to('Tbs'), 8)
})

test('Tbs to fl-oz', (t) => {
  t.plan(1)
  t.equals(convert(2).from('Tbs').to('fl-oz'), 1)
})

test('Tbs to Tbs', (t) => {
  t.plan(1)
  t.equals(convert(140).from('Tbs').to('Tbs'), 140)
})

// When converting between systems, expect < 0.1% error
test('tsp to l', (t) => {
  t.plan(1)
  const expected = 1.75
  const actual = convert(355).from('tsp').to('l')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('in3 to l', (t) => {
  t.plan(1)
  const expected = 0.0163871
  const actual = convert(1).from('in3').to('l')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('in3 to fl-oz', (t) => {
  t.plan(1)
  const expected = 0.554113
  const actual = convert(1).from('in3').to('fl-oz')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('m3 to yd3', (t) => {
  t.plan(1)
  const expected = 1.30795
  const actual = convert(1).from('m3').to('yd3')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('ft3 to cm3', (t) => {
  t.plan(1)
  const expected = 28316.8
  const actual = convert(1).from('ft3').to('cm3')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('pnt to ml', (t) => {
  t.plan(1)
  const expected = 2366
  const actual = convert(5).from('pnt').to('ml')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('ml to gal', (t) => {
  t.plan(1)
  const expected = 2.609
  const actual = convert(9876).from('ml').to('gal')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})

test('gal to l', (t) => {
  t.plan(1)
  const expected = 37.85
  const actual = convert(10).from('gal').to('l')
  t.ok(percentError(expected, actual) < ACCURACY
    , 'Expected: ' + expected + ', Actual: ' + actual)
})
