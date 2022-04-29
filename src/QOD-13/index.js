document.getElementById('app').innerHTML = `
<h1>QOD-26-04-2022</h1>
`

// Q.1 Find kinetic energy
const getKineticEnegy = (m, v) => 0.5 * m * Math.pow(v, 2)

console.log(getKineticEnegy(150, 15))

// Q.2 Find simple interest
const getSI = (principal, time, rate) => (principal * time * rate) / 100

console.log(getSI(100, 6, 2))

// Q.3 Write a program to convert octal to decimal
const getDecimal = octalNumber => {
  let numStr = String(octalNumber)
    .split('')
    .map(n => Number(n))
    .reverse()
  let sum = 0
  for (let i = 0; i < numStr.length; i++) {
    sum += numStr[i] * Math.pow(8, i)
  }
  return sum
}

// Shortcut
const getDecimal2 = octalNumber => parseInt(octalNumber, 8)

// Numbers with decimal point
const getDecimal3 = octalNumber => {
  let [beforeDecimal, afterDecimal] = String(octalNumber).split('.')
  beforeDecimal = beforeDecimal.split('').reverse()
  afterDecimal = afterDecimal.split('')

  // Using for loop
  // let firstSum = 0;
  // let secondSum = 0;

  // for (let i = 0; i < beforeDecimal.length; i++)
  //   firstSum += beforeDecimal[i] * Math.pow(8, i);

  // for (let i = 0; i < afterDecimal.length; i++)
  //   secondSum += afterDecimal[i] * (1 / Math.pow(8, i + 1));

  // return firstSum + secondSum;

  // using reduce
  const newFirstSum = beforeDecimal.reduce(
    (acc, val, i) => acc + val * Math.pow(8, i),
    0
  )
  const newSecondSum = afterDecimal.reduce(
    (acc, val, i) => acc + val * (1 / Math.pow(8, i + 1)),
    0
  )
  return newFirstSum + newSecondSum
}

console.log(getDecimal(116))
console.log(getDecimal2(116))
console.log(getDecimal3(246.28))
console.log(getDecimal3(761.12))

// Octal to decimal formula referred from https://www.cuemath.com/numbers/octal-to-decimal/
