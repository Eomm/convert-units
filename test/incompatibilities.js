'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('ltr to kg throws', (t) => {
  t.plan(1)
  t.throws(function () {
    convert(2).from('ltr').to('kg')
  })
})

test('fl-oz to oz throws', (t) => {
  t.plan(1)
  t.throws(function () {
    convert(4).from('fl-oz').to('oz')
  })
})

test('kg to fl-oz throws', (t) => {
  t.plan(1)
  t.throws(function () {
    convert(4).from('kg').to('fl-oz')
  })
})

test('kg to ft throws', (t) => {
  t.plan(1)
  t.throws(function () {
    convert(4).from('kg').to('fl-oz')
  })
})

test('kg to nonexistant unit throws', (t) => {
  t.plan(1)
  t.throws(function () {
    convert(4).from('kg').to('garbage')
  })
})

test('nonexistant unit to kg throws', (t) => {
  t.plan(1)
  t.throws(function () {
    convert(4).from('nonexistant unit')
  })
})

test('.to before .from throws', (t) => {
  t.plan(1)
  t.throws(function () {
    convert(4).to('kg').from('fl-oz')
  })
})

test('describe not existing', (t) => {
  t.plan(1)
  t.throws(function () {
    convert().describe('xyz')
  })
})

test('.toBest before .from throws', (t) => {
  t.plan(1)
  t.throws(function () {
    convert().toBest({ exclude: ['km', 'm'] }).from('mm')
  })
})

test('.from without destination', (t) => {
  t.plan(1)
  t.throws(function () {
    convert().to('kg')
  })
})
