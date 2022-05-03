import { findLastWordLen, isAnagram, shiftWord } from './index.js'

describe('Testing QOD 18', () => {
  // Question 1
  describe('findLastWordLen function should return expected ouput', () => {
    it('testCase 1', () =>
      expect(findLastWordLen('hello neogrammers')).toBe(11))

    it('testCase 2', () =>
      expect(findLastWordLen('hello joe good morning')).toBe(7))
  })

  // Question 2
  describe('isAnagram function should return expected ouput', () => {
    it('testCase 1', () => expect(isAnagram('elbow', 'below')).toBe(true))
    it('testCase 2', () => expect(isAnagram('pain', 'gain')).toBe(false))
  })

  // Question 3
  describe('shiftWord function should return expected ouput', () => {
    it('testCase 1', () => expect(shiftWord('xyza', 'zaxy')).toBe(true))
    it('testCase 2', () => expect(shiftWord('xyza', 'yzxa')).toBe(false))
  })
})
