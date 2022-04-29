document.getElementById('app').innerHTML = `
<h1>QOD 22-04-2022</h1>
`

// Question 1
/*
Given the cost price and selling price of product. Write a program to Calculate the profit or Loss
*/
const findProfitLoss = (cp, sp) => {
  const diff = cp - sp
  return diff > 0
    ? `${diff} PROFIT`
    : diff === 0
    ? `NO PROFIT NO LOSS`
    : `${Math.abs(diff)} LOSS`
}

console.log(findProfitLoss(1125, 1125))
console.log(findProfitLoss(2125, 1125))
console.log(findProfitLoss(125, 1125))

// Question 2
/*
Write a JS program to compute the sum of all digits that occur in given string
*/
const countSum = num =>
  num
    .split('')
    .map(Number)
    .reduce((acc, n) => acc + n, 0)

console.log(countSum('1234'))

// Question 3
// Write a program to convert decimal to binary
const decimalToBinary = n => Number(n.toString(2))

console.log(decimalToBinary(5))
