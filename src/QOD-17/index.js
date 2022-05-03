/* Q.1 
Given a valid (IPv4) return a defanged version of that IP address. 
A defanged IP address replaces every peiod "." with "[.]"
Input: address = "255.100.50.0"
Output: address = "255[.]100[.]50[.]0"
*/

const defangIP = ipAddress => ipAddress.split('.').join('[.]')
console.log(defangIP('255.100.50.1'))

/* Q.2
Given a string reverse only all the vowels in the string and return it
The vowels are a, e,i,o, u they can appear in both cases
Input: s = 'neoGCamp'
Output: "naoGcemp"
*/
const reverseVowels = str => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  const revVowels = str.split('').filter(c => vowels.includes(c))
  let res = ''
  let count = 0
  // for (let i = str.length - 1; i >= 0; i--) {
  //   if (vowels.includes(str[i]))
  //     revVowels.push(str[i])
  // }
  for (let c of str) {
    if (vowels.includes(c)) {
      res += revVowels[count]
      count++
    }
    else res += c
  }
  return res

}

console.log(reverseVowels('neoGCamp'))


/*Q.3
You have been given a string summerFruits that are available in summer, and fruits
representing the fruits you have. Find the summer fruits in fruits. summerFruits is
case sensitive. (a is not equal to A). Each character represents a type of fruit
and the fruits present in the summer fruits are unique

Input: summerFruits = "aA" fruits ="aaAAbbbb"
Ouput: 4
*/

const findFruits = (summerFruits, fruits) => {
  let SFArray = summerFruits.split('')
  let count = 0
  for (let fruit of fruits) {
    if (SFArray.includes(fruit)) count++
  }
  console.log(count)
}

findFruits('aA', 'aaAAbbbb')

