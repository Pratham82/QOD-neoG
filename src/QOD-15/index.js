document.getElementById('app').innerHTML = `
<h1>28-04-2022</h1>
<h1>QOD  15</h1>
`

/*
Q.1 Given an array of integer nums and an integer target, check if there are two
numbers in the array such that they add up to target. Return any one pair that
add up to the target
*/

const findSum = (arr, target) => {
  // for (let i in arr) {

  // }
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]]
      }
    }
  }
}

// Other approach mentioned in DSH
const twoSum = (arr, target) => {
  /*
  Approach:
  1. Check if the  key with difference of current value and target is present in the array
  2. If not present then create the key with current iterating element and set value true
  3. If the difference between target and iterating element is found then return the difference and 
    current element
   */
  let tracker = {}
  for (let i = 0; i < arr.length; i++) {
    if (!tracker[target - arr[i]]) {
      tracker[arr[i]] = true
    } else {
      return [arr[i], target - arr[i]]
    }
  }
  return tracker
}
console.log(findSum([3, 7, 11, 15], 18))
console.log(twoSum([3, 7, 11, 15], 18))

/*
Q.2
Given an array and size k, break the array into chunks of k length and return them as
an array
*/
const chukIt = (arr, size) => {
  let res = []
  let start = 0
  let end = size
  for (let i = 0; i <= arr.length; i++) {
    const chunk = arr.slice(start, end)
    if (chunk.length) res.push(chunk)
    start += 3
    end += 3
  }
  return res
}

console.log(chukIt([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3))
/*
Q.3
Given an array with different counts of numbers we have to find the
number with the least frequency and return it.
If there are two or more numbers with the same least frequency, then return the biggest number
*/
const findLeastOccuredNum = arr => {
  const counter = {}
  for (let i in arr) {
    if (!counter[arr[i]]) counter[arr[i]] = 1
    else counter[arr[i]] += 1
  }
  let minCount = arr.length
  let min = 0
  for (let k in counter) {
    if (counter[k] < minCount) {
      minCount = counter[k]
      min = k
      // if (Number(k) > num) {
      //   num = Number(k);
      // }
    }
  }
  return min
}

console.log(
  findLeastOccuredNum([
    2, 2, 10, 10, 3, 3, 3, 3, 4, 4, 4, 4, 2, 5, 5, 5, 1, 1, 6, 6, 8, 8,
  ])
)
