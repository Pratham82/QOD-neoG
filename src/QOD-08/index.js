import './styles.css'

document.getElementById('app').innerHTML = `
<h1>QOD 20-04-2022</h1>
`

// Question 1
const findMax = (...args) => {
  let max = 0
  for (let i in args) if (args[i] > max) max = args[i]
  return max
}

console.log(findMax(2, 45, 64, 22))

// Question 2
const charAt = (str, n) => str[n]
const charAt2 = (str, n) => {
  for (let i in str) if (Number(i) === n) return str[i]
}

console.log(charAt('neoGcamp', 4))
console.log(charAt2('neoGcamp', 4))

// Question 3
const getDay = day => {
  const weekend = ['saturday', 'sunday']
  const weekdays = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday']
  const formatedDay = day.toLowerCase().trim()
  return weekend.includes(formatedDay)
    ? 'weekend'
    : weekdays.includes(formatedDay)
    ? 'weekday'
    : 'Day does not exist'
}

console.log(getDay('Sunday'))
console.log(getDay('Monday'))
console.log(getDay('Tuesday'))
console.log(getDay('   Saturday '))
