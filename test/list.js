'use strict'

const convert = require('../lib')
const { test } = require('tap')

test('list', function (t) {
  t.plan(11)
  const list = convert().list()
  const firstItem = list[0]

  const hasOwnProperty = Object.hasOwnProperty.bind(firstItem)

  t.ok(list.length > 0)
  t.ok(hasOwnProperty('abbr'))
  t.ok(typeof firstItem.abbr === 'string')
  t.ok(hasOwnProperty('measure'))
  t.ok(typeof firstItem.measure === 'string')
  t.ok(hasOwnProperty('system'))
  t.ok(typeof firstItem.system === 'string')
  t.ok(hasOwnProperty('singular'))
  t.ok(typeof firstItem.singular === 'string')
  t.ok(hasOwnProperty('plural'))
  t.ok(typeof firstItem.plural === 'string')
})

test('list by measure', (t) => {
  const full = convert().list()
  const measures = convert().measures()

  t.plan(measures.length * 2)
  measures.forEach(function (measure) {
    const list = convert().list(measure)

    t.ok(list.length > 0)
    t.ok(list.length < full.length)
  })
})
