
// ************NUMBERS*******************


const score = 400
console.log(score) //400
const balance = new Number(100)

console.log(balance) //[Number: 100]

console.log(balance.toString()) //100
console.log(balance.toString().length) //3
console.log(balance.toFixed(2)) //100.00

const otherNumber = 23.8966
console.log(otherNumber.toPrecision(3)) //23.9 //toPrecision can be from 1-21 only

const secondOtherNumber = 123.8966
console.log(secondOtherNumber.toPrecision(3)) //124

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')) //'en-IN' indian standard se comma lgega 

// *************** MATHS *******************

console.log(Math) //Object [Math] {} -->  object k andar bhot values honge 

console.log(Math.abs(-4)) //4
console.log(Math.round(4.6)) //5
console.log(Math.ceil(4.2)) //5
console.log(Math.floor(4.9)) //4
console.log(Math.min(2,4,7,1)) //1
console.log(Math.max(2,4,7,1)) //7

console.log(Math.random()) // 0-1 k beech me value always 
console.log((Math.random()*10) + 1) //guarantees min 1 to hoga hi coz 0-1 ke beech me 0.001 bhi ho skta hai jisko 10 se multiply kra to bhi wo 1 se niche rhegi isliye + 1
console.log(Math.floor((Math.random()*10) + 1)) //ek hi number chaiye to such as 7

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max-min + 1)) + min) //min = 10 se upar hi ayega ab