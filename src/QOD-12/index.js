import './styles.css'

document.getElementById('app').innerHTML = `
<h1>QOD 25-04-2022</h1>
`

/*Q.1 Write a program to convert Fahrenheit to Celcius conversion use
 use (c = (F -32) * 5/9) F and C are the temperatures of fahrenheit scale
 and Celcius scale respectively
 */

const fahrenheitToCeclcius = f => Number((((f - 32) * 5) / 9).toFixed(2))
console.log(fahrenheitToCeclcius(56))

// Write a program to calculate the sum of N natural digits, as input by the users?
const nDigitsSum = n => {
  let sum = 0
  for (let i = 1; i <= n; i++) sum += i
  return sum
}

console.log(nDigitsSum(100))

const nDigitsSum2 = n => (n * (n + 1)) / 2
console.log(nDigitsSum2(100))

// Write a JS program that reverses a number
const reverseNum = num => Number(String(num).split('').reverse().join(''))
console.log(reverseNum(123))

// const arr = [1, 2, 3, 4];
// let sum = 0;
// let newArr = [];
// arr.forEach((n) => {
//   sum += n;
// });

// console.log(newArr);

// const name = "1234";
// let rev = "";
// for (let i = name.length - 1; i >= 0; i--) {
//   rev += name[i];
// }

// console.log(rev);
