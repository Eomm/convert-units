const convert = require('../lib')
const assert = require('assert')
const tests = {}

tests.list = function () {
  const list = convert().list()
  const firstItem = list[0]

  assert(list.length > 0)
  assert(firstItem.hasOwnProperty('abbr'))
  assert(typeof firstItem.abbr === 'string')
  assert(firstItem.hasOwnProperty('measure'))
  assert(typeof firstItem.measure === 'string')
  assert(firstItem.hasOwnProperty('system'))
  assert(typeof firstItem.system === 'string')
  assert(firstItem.hasOwnProperty('singular'))
  assert(typeof firstItem.singular === 'string')
  assert(firstItem.hasOwnProperty('plural'))
  assert(typeof firstItem.plural === 'string')
}

tests['list by measure'] = function () {
  const full = convert().list()
  const measures = convert().measures()

  measures.map(function (measure) {
    const list = convert().list(measure)

    assert(list.length > 0)
    assert(list.length < full.length)
  })
}

module.exports = tests
