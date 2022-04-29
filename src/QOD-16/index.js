document.getElementById('app').innerHTML = `
<h1>QOD-16</h1>
<div>28-04-2022</div>
`

/*
Given an integer array nums move all 0s to the end of it
while maintaining the relative order of the non-zero elements
*/

const shiftZeros = nums => {
  let zeroesCount = 0
  let res = []
  for (let num of nums) {
    if (num !== 0) res.push(num)
    else zeroesCount++
  }
  return [...res, ...Array(zeroesCount).fill(0)]
}

console.log(shiftZeros([0, 2, 0, 3, 12, 0]))

/*
Given an array nums with length n return the element which occurred
at least n/2 times in the array
*/
const occurrenceChecker = nums => {
  const counter = {}
  for (let num of nums) {
    // generic coutner implementation
    if (!counter[num]) counter[num] = 1
    else counter[num]++
    // console.log(num, counter[num], nums.length / 2);
    // check at every step if the count of that number is gt equal to n/2 if it is then return
    if (counter[num] >= nums.length / 2) return num
  }
  return counter
}
console.log(occurrenceChecker([2, 2, 1, 1, 1, 2, 2]))

/*
Given a string s, find the first no repeating character in it and return its
index if it does not exist, return -1
s =  neogcamp
op: 0
s = nneeooggccaammpp
op: -1
*/
const findFirstNonRepeatingChar = str => {
  const ctr = {}
  const strArr = str.split('')
  for (let c of strArr) {
    if (!ctr[c]) ctr[c] = 1
    else ctr[c]++
  }
  let index = -1
  for (let c in ctr) {
    if (ctr[c] === 1) {
      index = strArr.indexOf(c)
      break
    }
  }
  return index
}

console.log('==')
console.log(findFirstNonRepeatingChar('neogcamp'))
console.log(findFirstNonRepeatingChar('nneogcamp'))
console.log(findFirstNonRepeatingChar('nneeooggccaammpp'))
console.log(findFirstNonRepeatingChar('loveleetcode'))
