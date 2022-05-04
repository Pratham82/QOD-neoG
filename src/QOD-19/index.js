/* Q.1
Write a program to take a month as input from the user and find out
whether the month has 31 days or not
*/
// const readline = require('readline').createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// readline.question('Who are you?', name => {
//   console.log(`Hey there ${name}!`);
//   readline.close();
// });

const getDays = inputMonth => {
  const monthMapper = {
    Jan: 1,
    Feb: 2,
    Mar: 3,
    Apr: 4,
    May: 5,
    Jun: 6,
    Jul: 7,
    Aug: 8,
    Sep: 9,
    Oct: 10,
    Nov: 11,
    Dec: 12
  }
  const date = new Date()
  date.setMonth(monthMapper[inputMonth])
  const month = date.getMonth()
  const year = date.getFullYear()
  const days = new Date(year, month, 0).getDate()
  return days
}


/* Q.2
Find tthe number of consonants and vowels in a string

Input: Bookkeeper
Output: {Vowels: 5, Consonants: 5}
*/
const findVowelsAndConsonants = word => {
  const vowels = ['a', 'e', 'i', 'o', 'u']
  const res = {
    Vowel: 0,
    Consonant: 0
  }
  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) res.Vowel++
    else res.Consonant++
  }
  return res
}
// findVowelsAndConsonants('Bookkeeper')
// findVowelsAndConsonants('gpay')
// findVowelsAndConsonants('orageon')

const findVowelsAndConsonants2 = word => word
  .toLowerCase()
  .split('')
  .reduce((acc, val) =>
    ['a', 'e', 'i', 'o', 'u'].includes(val)
      ? acc = { ...acc, Vowel: acc.Vowel + 1 }
      : acc = { ...acc, Consonant: acc.Consonant + 1 },
    { Vowel: 0, Consonant: 0 })

// console.log(findVowelsAndConsonants2('Bookkeeper'))

/* Q.3
Fizzbuzz=  Write a program to return an array from 1 to 100. But
for every multiple of 3, replace number with "Fizz", for every multiple
of 5. replace number with  "Buzz" and for every multiple of 3 & 5
replace it with "FizzBuzz"
Ouput: 1,2, Fiz, 4, Buzz...
*/

const fizzBuzz = () => {
  let res = []
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) res.push('FizzBuzz')
    else if (i % 3 === 0) res.push('Fizz')
    else if (i % 5 === 0) res.push('Buzz')
    else res.push(i)
  }
  return res
}


const fizzBuzz2 = () => {
  let res = []
  const fizzBuzzChck = n => n % 3 === 0 && n % 5 === 0
    ? 'FizzBuzz'
    : n % 3 === 0
      ? 'Fizz'
      : n % 5 === 0
        ? 'Buzz'
        : n
  for (let i = 1; i <= 100; i++) {
    res.push(fizzBuzzChck(i))
  }
  return res
}

export { getDays, findVowelsAndConsonants, findVowelsAndConsonants2, fizzBuzz, fizzBuzz2 }

