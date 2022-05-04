import {
  getDays,
  findVowelsAndConsonants,
  findVowelsAndConsonants2,
  fizzBuzz,
  fizzBuzz2
} from '../QOD-19/'

describe('Testing QOD 19', () => {
  // Question 1
  describe('getDays function should return expected ouput', () => {
    it('testCase 1', () =>
      expect(getDays('Apr')).toBe(30))

    it('testCase 2', () =>
      expect(getDays('Jun')).toBe(30))

    it('testCase 3', () =>
      expect(getDays('Jan')).toBe(31))
  })

  // Question 2
  describe('findVowelsAndConsonants function should return expected ouput', () => {
    it('testCase 1', () => expect(findVowelsAndConsonants('Bookkeeper')).toMatchObject({ Vowel: 5, Consonant: 5 }))
    it('testCase 2', () => expect(findVowelsAndConsonants('gpay')).toMatchObject({ Vowel: 1, Consonant: 3 }))
    it('testCase 3', () => expect(findVowelsAndConsonants2('gpay')).toMatchObject({ Vowel: 1, Consonant: 3 }))
  })

  // Question 3
  describe('fizzBuzz function should return expected ouput', () => {
    const res = fizzBuzz()
    it('testCase 1', () => expect(fizzBuzz()).toMatchObject(res))
    it('testCase 2', () => expect(fizzBuzz2()).toMatchObject(res))
  })
})
