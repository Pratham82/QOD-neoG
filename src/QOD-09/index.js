import './styles.css'

document.getElementById('app').innerHTML = `
<h1>QOD 21-02-2022</h1>
`

// Question 1
/*
Given three angles of triangle your function should return if it is a
scalene, isosceles, equilateral triangle or not a triangle at all
 */

const typeOfTriangle = (angle1, angle2, angle3) => {
  // let res = angle1 + angle2 + angle3 !== 180 ? "Not a triangle" : "";
  if (angle1 + angle2 + angle3 !== 180) {
    return 'Not a triangle'
  }
  if ([angle1, angle2, angle3].every(side => side === 60)) {
    return 'Equilateral Triangle'
  }
  if (angle1 === angle2 || angle2 === angle3 || angle1 === angle3) {
    return 'Isosceles Triangle'
  } else {
    return 'Scalene Triangle'
  }
}

console.log(typeOfTriangle(60, 60, 60))
console.log(typeOfTriangle(80, 50, 50))
console.log(typeOfTriangle(80, 60, 40))

// Question 2
/*
Given two dates your function should return which one comes before the other
*/
const minDate = (date1, date2) => {
  const formatDate = date => date.split('/').reverse().join('/')
  const [d1, d2] = [date1, date2].map(formatDate)
  return d1 === d2 ? 'Dates are equal' : d1 < d2 ? date1 : date2
}
console.log(minDate('10/12/2022', '10/12/2022'))

// Question 3
/*
A program that counts value of each character and points the most repeated characters
*/

const getMostRepeated = str => {
  let counter = {}
  let maximum = {
    char: '',
    count: 0,
  }
  for (let c of str) {
    if (counter[c]) counter[c]++
    else counter[c] = 1
  }
  Object.entries(counter).map(([key, val]) => {
    if (val > maximum.count) {
      maximum.count = val
      maximum.char = key
    }
  })

  return maximum.char
}

console.log(getMostRepeated('continuation'))
