const convert = require('../lib')
const assert = require('assert')
const tests = {}

tests.list = function () {
  const list = convert().list()
  const firstItem = list[0]

  const hasOwnProperty = Object.hasOwnProperty.bind(firstItem)

  assert(list.length > 0)
  assert(hasOwnProperty('abbr'))
  assert(typeof firstItem.abbr === 'string')
  assert(hasOwnProperty('measure'))
  assert(typeof firstItem.measure === 'string')
  assert(hasOwnProperty('system'))
  assert(typeof firstItem.system === 'string')
  assert(hasOwnProperty('singular'))
  assert(typeof firstItem.singular === 'string')
  assert(hasOwnProperty('plural'))
  assert(typeof firstItem.plural === 'string')
}

tests['list by measure'] = function () {
  const full = convert().list()
  const measures = convert().measures()

  measures.forEach(function (measure) {
    const list = convert().list(measure)

    assert(list.length > 0)
    assert(list.length < full.length)
  })
}

module.exports = tests
