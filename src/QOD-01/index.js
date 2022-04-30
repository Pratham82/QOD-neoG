// Q.1 Given a and b your function should return the value of a^b
const power = (a, b) => Math.pow(a, b)

const power2 = (a, b) => {
  let res = a
  for (let i = 1; i < b; i++) {
    res *= a
  }
  return res
}
console.log(power(10, 2))
console.log(power2(10, 2))
console.log(power2(2, 3))
console.log(power2(12, 2))
console.log(power2(25, 2))

// Q.2 Given an array, your function should return the length of the array
// const getLength = arr => {
//   let len = 0
//   for (let i = 0; i < arr.length; i++) len++
//   return len
// }

const getLength = arr => arr.reduce((acc) => acc += 1, 0)
console.log(getLength([12, 3, 4, 5, 6]))

/*
Q. Write a function that generates a secret code from a given string,
by shifting characters of the alphabet by N places. Example:
Input: encodeString("neogcamp", 2) ––> Output: pgqiecor
Explanation: 2 represents shifting alphabets by 2 places. a –> c, b –> d, c –> e and so on.
*/
const encodeString = (str, pad) => {
  let res = ''
  for (let i in str) {
    const charCode = str.charCodeAt(i) + pad
    if (charCode <= 122) res += String.fromCharCode(charCode)
    else res += String.fromCharCode(97 + 2)
  }
  return res
}

console.log(encodeString('neogcamp', 2))
// console.log(encodeString('NeoGcamZ', 2))
console.log(encodeString('zozo', 2))
