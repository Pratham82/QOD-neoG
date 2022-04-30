// Q.1 Given length of a regular hexagon, your function should return area of the hexagon.
const areaOfHexagon = side => (3 * Math.sqrt(3) / 2) * Math.pow(side, 2)
console.log(areaOfHexagon(19))

// Q.2 Given an array and an item, your function should return the index at which the item is present.
const getIndex = (arr, item) => {
  for (let i = 0; i < arr.length; i++)
    if (arr[i] === item)
      return i
  return -1
}

console.log(getIndex([11, 23, 55, 6], 23))
console.log(getIndex([11, 23, 55, 6], 99))

// Q.3 Given a sentence, return a sentence with first letter of all words as capital.
const capitalize = sentence => sentence.split(" ")
  .map(word => word[0].toUpperCase() + word.slice(1))
  .join(" ")

console.log(capitalize("good morning traveller"))
console.log(capitalize("We are neoGrammers"))
