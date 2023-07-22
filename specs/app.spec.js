// import { expect, it } from '@jest/globals'
// import fetch from 'node-fetch'
import { nameIsValid, fullTrim, getTotal } from '../src/app.js'

describe('Test Example', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3)
  })
})

describe('Parameterized unit tests for for func nameIsValid', () => {
  test.each`
  param | expected
  ${'YO'} | ${true}
  ${'sampleText'} | ${true}
  ${'Y'} | ${false}
  ${5} | ${false}
  `('$param = $expected', ({ param, expected }) => {
    expect(nameIsValid(param)).toBe(expected)
  })
})

describe('Unit tests for func fullTrim', () => {
  it('Positive: two words with space', () => {
    expect(fullTrim('Hello World'))
      .toBe('HelloWorld')
  })
  it('Positive: five words with spaces', () => {
    expect(fullTrim('One Two Three Four Five'))
      .toBe('OneTwoThreeFourFive')
  })
  it('Positive: empty string', () => {
    expect(fullTrim(''))
      .toBe('')
  })
})

describe('Unit tests for func getTotal', () => {
  it('Positive: one product costs 100000', () => {
    expect(getTotal([{ quantity: 1, name: 'DJI Mini 3 Pro', price: 100000 }]))
      .toBe(100000)
  })
  it('Positive: two products cost 180000', () => {
    expect(getTotal([{ quantity: 1, name: 'DJI Mini 3 Pro', price: 100000 }, { quantity: 1, name: 'iPhone 11', price: 80000 }]))
      .toBe(180000)
  })
  it('Positive: two products with discount cost 144000', () => {
    expect(getTotal([{ quantity: 1, name: 'DJI Mini 3 Pro', price: 100000 }, { quantity: 1, name: 'iPhone 11', price: 80000 }], 20))
      .toBe(144000)
  })
})
