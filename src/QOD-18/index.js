
/* Q.1
Given a string st, return the length of the last word
eg. 'hello neogrammers':  11
eg. 'hello neogrammers you guys rock': 4
*/

const findLastWordLen = sentence => sentence.split(' ')[sentence.split(' ').length - 1].length
console.log(findLastWordLen('hello neoGrammers'))

/* Q.2
Given two check if the second string is an anagram of the first
eg. s1 = 'below', s2 = 'elbow' : true
s1 = 'gain' s2 = 'pain' : false
*/

// using predefined methods
const isAnagram = (string1, string2) => {
  if (string1.length !== string2.length) {
    return false
  }
  const s1Arr = string1.trim().split('').sort().join('')
  const s2Arr = string2.trim().split('').sort().join('')

  return s1Arr === s2Arr
}

console.log(isAnagram('below', 'elbow'))
console.log(isAnagram('pain', 'gain'))

/* Q.3
Given two strings check if the first string can match the 
second sttring after some number of shifts
eg. s1 = "xyza", s2 ="zaxy" : true
eg. s1 = 'xyza' s2 = 'yzxa' false
*/

const shiftWord = (word1, word2) => {
  let res = []
  const words = word1.split('')
  for (const i in word1)
    res.push([...words.slice(i), ...words.slice(0, i)].join(''))
  return res.includes(word2)
}

console.log('--')
console.log(shiftWord('xyza', 'zaxy'))
console.log(shiftWord('xyza', 'yzxa'))
