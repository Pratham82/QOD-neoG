
/*
Q.1
Given n numbers, your function should return the minimum of them all. The number of parameters won't be accepted from user.
Example:
Input: findMin(3,5) ––> Output: 3
Input: findMin(3,5,9,1) ––> Output: 1
*/

const findMin = (arr) => {
  let min = arr[0]
  for (let n of arr)
    if (n <= min) min = n
  return min
}
console.log(findMin([3, 5, 9, 1, 8, 10]))


/*
Q.2
Given two arrays, your function should return single merged array.
Example:
Input: mergeArray([1,3,5], [2,4,6]) ––> Output: [1,3,5,2,4,6]
*/
const mergeArray = (...arrs) => arrs.reduce((acc, arr) => acc.concat(arr), [])
console.log(mergeArray([1, 3, 5], [2, 4, 6]))

/*
Given a sentence, your function should reverse the order of characters 
in each word, keeping the same sequence of words.
Example:
Input: reverseCharactersOfWord('we are neoGrammers') –––> 
Output: ew era sremmarGoen
*/

const reverseWord = word => word.split('').reverse().join("")
const reverseCharactersOfWord = str => str.split(" ").map(reverseWord).join(" ")
console.log(
  reverseCharactersOfWord('we are neoGrammers')
)
