const convert = require('../lib')
const { test } = require('tap')

test('l possibilities', (t) => {
  t.plan(1)
  const actual = convert().from('l').possibilities()
  const expected = ['mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3']
  t.deepEquals(actual.sort(), expected.sort())
})

test('kg possibilities', (t) => {
  t.plan(1)
  const actual = convert().from('kg').possibilities()
  const expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't']
  t.deepEquals(actual.sort(), expected.sort())
})

test('m possibilities', (t) => {
  t.plan(1)
  const actual = convert().from('m').possibilities()
  const expected = ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi']
  t.deepEquals(actual.sort(), expected.sort())
})

test('each possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('each')
  const expected = ['ea', 'dz']
  t.deepEquals(actual.sort(), expected.sort())
})

test('mass possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('mass')
  const expected = ['mcg', 'mg', 'g', 'kg', 'mt', 'oz', 'lb', 't']
  t.deepEquals(actual.sort(), expected.sort())
})

test('volume possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('volume')
  const expected = ['mm3', 'cm3', 'ml', 'cl', 'dl', 'l', 'kl', 'm3', 'km3', 'krm', 'tsk', 'msk', 'kkp', 'glas', 'kanna', 'tsp', 'Tbs', 'in3', 'fl-oz', 'cup', 'pnt', 'qt', 'gal', 'ft3', 'yd3']
  t.deepEquals(actual.sort(), expected.sort())
})

test('volume flow rate possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('volumeFlowRate')
  const expected = ['mm3/s', 'cm3/s', 'ml/s', 'cl/s', 'dl/s', 'l/s', 'l/min', 'l/h', 'kl/s', 'kl/min', 'kl/h', 'm3/s', 'm3/min', 'm3/h', 'km3/s', 'tsp/s', 'Tbs/s', 'in3/s', 'in3/min', 'in3/h', 'fl-oz/s', 'fl-oz/min', 'fl-oz/h', 'cup/s', 'pnt/s', 'pnt/min', 'pnt/h', 'qt/s', 'gal/s', 'gal/min', 'gal/h', 'ft3/s', 'ft3/min', 'ft3/h', 'yd3/s', 'yd3/min', 'yd3/h']
  t.deepEquals(actual.sort(), expected.sort())
})

test('length possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('length')
  const expected = ['mm', 'cm', 'm', 'km', 'in', 'yd', 'ft-us', 'ft', 'fathom', 'mi', 'nMi']
  t.deepEquals(actual.sort(), expected.sort())
})

test('temperature possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('temperature')
  const expected = ['C', 'K', 'F', 'R']
  t.deepEquals(actual.sort(), expected.sort())
})

test('time possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('time')
  const expected = ['ns', 'mu', 'ms', 's', 'min', 'h', 'd', 'week', 'month', 'year']
  t.deepEquals(actual.sort(), expected.sort())
})

test('digital possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('digital')
  const expected = ['b', 'Kb', 'Mb', 'Gb', 'Tb', 'B', 'KB', 'MB', 'GB', 'TB']
  t.deepEquals(actual.sort(), expected.sort())
})

test('partsPer possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('partsPer')
  const expected = ['ppm', 'ppb', 'ppt', 'ppq']
  t.deepEquals(actual.sort(), expected.sort())
})

test('pressure possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('pressure')
  const expected = ['Pa', 'kPa', 'MPa', 'hPa', 'bar', 'torr', 'psi', 'ksi']
  t.deepEquals(actual.sort(), expected.sort())
})

test('speed possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('speed')
  const expected = ['m/s', 'km/h', 'm/h', 'knot', 'ft/s']
  t.deepEquals(actual.sort(), expected.sort())
})

test('pace possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('pace')
  const expected = ['s/m', 'min/km', 'min/mi', 's/ft']
  t.deepEquals(actual.sort(), expected.sort())
})

test('current possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('current')
  const expected = ['A', 'mA', 'kA']
  t.deepEquals(actual.sort(), expected.sort())
})

test('voltage possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('voltage')
  const expected = ['V', 'mV', 'kV']
  t.deepEquals(actual.sort(), expected.sort())
})

test('power possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('power')
  const expected = ['W', 'mW', 'kW', 'MW', 'GW']
  t.deepEquals(actual.sort(), expected.sort())
})

test('reactive power possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('reactivePower')
  const expected = ['VAR', 'mVAR', 'kVAR', 'MVAR', 'GVAR']
  t.deepEquals(actual.sort(), expected.sort())
})

test('apparent power possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('apparentPower')
  const expected = ['VA', 'mVA', 'kVA', 'MVA', 'GVA']
  t.deepEquals(actual.sort(), expected.sort())
})

test('energy possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('energy')
  const expected = ['Wh', 'mWh', 'kWh', 'MWh', 'GWh', 'J', 'kJ']
  t.deepEquals(actual.sort(), expected.sort())
})

test('reactive energy possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('reactiveEnergy')
  const expected = ['VARh', 'mVARh', 'kVARh', 'MVARh', 'GVARh']
  t.deepEquals(actual.sort(), expected.sort())
})

test('reactive energy possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('frequency')
  const expected = ['Hz', 'mHz', 'kHz', 'MHz', 'GHz', 'THz', 'rpm', 'deg/s', 'rad/s']
  t.deepEquals(actual.sort(), expected.sort())
})

test('illuminance possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('illuminance')
  const expected = ['lx', 'ft-cd']
  t.deepEquals(actual.sort(), expected.sort())
})

test('angle possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('angle')
  const expected = ['rad', 'deg', 'grad', 'arcmin', 'arcsec']
  t.deepEquals(actual.sort(), expected.sort())
})

test('charge possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('charge')
  const expected = ['c', 'mC', 'μC', 'nC', 'pC']
  t.deepEquals(actual.sort(), expected.sort())
})

test('force possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('force')
  const expected = ['N', 'kN', 'lbf']
  t.deepEquals(actual.sort(), expected.sort())
})

test('acceleration possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities('acceleration')
  const expected = ['g-force', 'm/s2']
  t.deepEquals(actual.sort(), expected.sort())
})

test('all possibilities', (t) => {
  t.plan(1)
  const actual = convert().possibilities()
  // Please keep these sorted for maintainability
  const expected = [
    'A',
    'arcmin',
    'arcsec',
    'B',
    'C',
    'F',
    'R',
    'GB',
    'Gb',
    'K',
    'KB',
    'Kb',
    'MB',
    'MPa',
    'Mb',
    'N',
    'Pa',
    'TB',
    'Tb',
    'ac',
    'b',
    'bar',
    'c',
    'cl',
    'cl/s',
    'cm',
    'cm2',
    'cm3',
    'cm3/s',
    'cup',
    'cup/s',
    'd',
    'deg',
    'deg/s',
    'dl',
    'dl/s',
    'ea',
    'dz',
    'fl-oz',
    'fl-oz/h',
    'fl-oz/min',
    'fl-oz/s',
    'ft-us',
    'ft',
    'fathom',
    'ft-cd',
    'ft/s',
    'ft2',
    'ft3',
    'ft3/h',
    'ft3/min',
    'ft3/s',
    'g',
    'g-force',
    'gal',
    'gal/h',
    'gal/min',
    'gal/s',
    'glas',
    'grad',
    'GHz',
    'GVA',
    'GVAR',
    'GVARh',
    'GW',
    'GWh',
    'h',
    'hPa',
    'ha',
    'Hz',
    'in',
    'in2',
    'in3',
    'in3/h',
    'in3/min',
    'in3/s',
    'J',
    'kA',
    'kPa',
    'kanna',
    'kg',
    'kkp',
    'kJ',
    'kN',
    'kl',
    'kl/h',
    'kl/min',
    'kl/s',
    'km',
    'km/h',
    'km2',
    'km3',
    'km3/s',
    'knot',
    'krm',
    'ksi',
    'kHz',
    'kV',
    'kVA',
    'kVAR',
    'kVARh',
    'kW',
    'kWh',
    'l',
    'l/h',
    'l/min',
    'l/s',
    'lb',
    'lbf',
    'lx',
    'm',
    'm/h',
    'm/s',
    'm/s2',
    'm2',
    'm3',
    'm3/h',
    'm3/min',
    'm3/s',
    'mA',
    'mC',
    'mcg',
    'mg',
    'mi',
    'mi2',
    'min',
    'min/km',
    'min/mi',
    'ml',
    'ml/s',
    'mm',
    'mm2',
    'mm3',
    'mm3/s',
    'month',
    'ms',
    'msk',
    'mt',
    'mu',
    'nC',
    'mHz',
    'MHz',
    'mV',
    'mVA',
    'MVA',
    'mVAR',
    'MVAR',
    'mVARh',
    'MVARh',
    'mW',
    'MW',
    'mWh',
    'MWh',
    'nMi',
    'ns',
    'oz',
    'pC',
    'pnt',
    'pnt/h',
    'pnt/min',
    'pnt/s',
    'ppb',
    'ppm',
    'ppq',
    'ppt',
    'psi',
    'qt',
    'qt/s',
    'rad',
    'rad/s',
    'rpm',
    's',
    's/m',
    's/ft',
    't',
    'Tbs',
    'Tbs/s',
    'THz',
    'torr',
    'tsk',
    'tsp',
    'tsp/s',
    'V',
    'VA',
    'VAR',
    'VARh',
    'W',
    'week',
    'Wh',
    'yd',
    'yd2',
    'yd3',
    'yd3/h',
    'yd3/min',
    'yd3/s',
    'year',
    'μC'
  ]

  try {
    t.deepEquals(actual.sort(), expected.sort())
  } catch (e) {
    // This gets too long, and gets truncated
    process.stderr.write(e + '\n')
    throw e
  }
})
