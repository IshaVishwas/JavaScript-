const name = "isha"

const repoCount = 50

//console.log(name + repoCount + " Value")

//string interpolation --> modern way 
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)

// new declaration 
const gameName = new String('isha-ic')
console.log(gameName)
console.log(gameName[0])
console.log(gameName.__proto__)

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.charAt(2))
console.log(gameName.indexOf('h'))

const newString = gameName.substring(0,5)
console.log(newString)

const anotherString = gameName.slice(-7,3)
console.log(anotherString)

const newStringOne = "   isha   "
console.log(newStringOne)
console.log(newStringOne.trim())

const url = "https://isha.com/isha%20vishwas"

console.log(url.replace('%20', '-'))
console.log(url.includes('isha'))
console.log(url.includes('hey'))

console.log(gameName.split('-'))


