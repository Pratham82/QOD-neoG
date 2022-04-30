// Q.1 Write a program that takes two strings and copies smaller strings into a bigger string.
const stitchStrings = (str1, str2) => str1.length > str2.length ? str1 + str2 : str2 + str1
console.log(
  stitchStrings(
    "smaller String", "bigger String"
  )
)


// Q.2 Write a program that converts the string into uppercase.
const upperCase = str => str.trim()
  .split(" ")
  .map(word => word.toUpperCase())
  .join(" ")
console.log(upperCase("kuCh Bhi"))

/*
Q.3
Given an input string S and two characters c1 and c2, you need to 
replace every occurrence of character c1 with character c2 in the given string.
*/
const replaceChar = (str, c1, c2) => {
  let finalStr = ''
  for (let c of str) {
    if (c === c1)
      finalStr += c2
    else
      finalStr += c
  }
  return finalStr
}

console.log(
  replaceChar("aaloo", "o", "u")

)
