// Q.1 Given a sentence, your functions should return the number of words in the sentence.
const countWords = sentence => sentence.trim().split(" ").length
console.log(countWords('We are taking the test'))

// Q.2 Given an array and two numbers, your function should replace all entries of the 
// first number in an array with the second number.
const replaceNumbers = (arr, n1, n2) => {
  let res = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === n1) res.push(n2)
    else res.push(arr[i])
  }
  return res
}
console.log(replaceNumbers([1, 5, 3, 5, 6, 8], 5, 10))


/* Q.3
Given an array of numbers, your function should return an array in the ascending order.
Input: sortArray([100,83,32,9,45,61]) ––> Output: [9,32,45,61,83,100]
*/

const sortArrayAsc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]]
      }
    }
  }
  return arr
}

console.log(sortArrayAsc([100, 83, 32, 9, 45, 61]))

