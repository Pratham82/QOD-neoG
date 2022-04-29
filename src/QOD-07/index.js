document.getElementById('app').innerHTML = `
<h1>QOD 19-04-2021</h1>
`

// With inbuilt methods
// Question 1
const maskLast4Characters = str => `${str.slice(0, str.length - 4)}####`

console.log(maskLast4Characters('55634434276455423'))

// Question 2
const isPalindrome = str => str.split('').reverse().join('') === str

console.log(isPalindrome('gap'))
console.log(isPalindrome('nun'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('civic'))

// Question 3
const reverseWords = sentence => sentence.split(' ').reverse().join(' ')

console.log(reverseWords('Welcome to neoG Camp'))

// Without using inbuilt methods
//Question 1
const maskLast4CharactersNew = str => {
  let requiredString = ''
  const reqLength = str.length - 5
  for (let i = 0; i < str.length; i++) {
    if (i <= reqLength) requiredString += str[i]
    else requiredString += '#'
  }
  return requiredString
}

console.log(maskLast4CharactersNew('55634434276455423'))

// Question 2
const isPalindromeNew = str => {
  let reversedString = ''
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i]
  }
  return reversedString === str
}
console.log(isPalindromeNew('prop'))
console.log(isPalindromeNew('mom'))

//Question 3
const reverseWordsNew = str => {
  const words = str.split(' ')
  let resultStr = ''
  for (let i = words.length - 1; i >= 0; i--) {
    resultStr += ` ${words[i]}`
  }
  return resultStr
}

console.log(reverseWordsNew('Welcome to neoG Camp'))
