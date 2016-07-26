'use strict'

const test = require('tape')
const hash = require('../')

const testCases = [
  'ASDFLKJH56789)*&^$`Ω≈ç√¥¨∆†',
  123456789
]

test('hash', (t) => {
  t.plan(2 * testCases.length)
  testCases.forEach((item) => {
    const hsh = hash(item)
    const len = hsh.length
    const hsh2 = hash(item)
    t.equals(len > 4 && len < 8, true, 'hash(' + item + ').length.length > 4 && < 8')
    t.equals(hsh, hsh2, 'should always produce the same hash')
  })
})
