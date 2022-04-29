document.getElementById('app').innerHTML = `
<h1>27-04-2022</h1>
<h1>QOD 14</h1>
`

/*
Q.1
Given an object obj. we have to invert its key and value for each entry.
Inversion will result in value being used as key and keys as values.
*/

const invertKeyValue = obj => {
  let res = {}
  Object.entries(obj).map(([key, value]) => {
    res[value] = key
  })
  return res
}

console.log(
  invertKeyValue({
    name: 'Prathamesh',
    age: 24,
    haircolor: 'black',
  })
)

/*
Q.2
Given an array of numbers pick any two numbers a and b, we could get the difference
by Math.abs(a - b). Write a function to get the largest difference.
*/
const getMaxDifference = arr => {
  let maxDiff = []
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      const diff = Math.abs(arr[i] - arr[j])
      if (diff > maxDiff) {
        maxDiff = diff
        console.log(arr[i], arr[j])
      }
    }
  }
  return maxDiff
}

const arr = [12, 23, -2, 4, 15, 2, 5]
console.log(getMaxDifference(arr))

/*
Q.3
Given an array with different  counts of the numbers we have to find the number 
with the most frequency and return it.
If there are two or more numbers with the same most frequency they return the biggest
number
*/
const findMaxOccurrence = arr => {
  const counter = {}
  for (let n of arr) {
    if (counter[n]) counter[n]++
    else counter[n] = 1
  }

  let maxVal = 0
  let maxOcc = 0
  Object.entries(counter).map(([k, v]) => {
    if (v > maxVal) {
      maxVal = v
      maxOcc = k
    }
  })
  return { counter, maxOcc }
}

console.log(
  findMaxOccurrence([
    8, 8, 8, 8, 8, 1, 2, 2, 4, 3, 2, 4, 2, 4, 4, 5, 6, 6, 6, 6, 6, 1,
  ])
)
