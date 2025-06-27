//singleton --> when declared as literals then singleton is not made
// object.create --> as constructor 
// object literals 

const mySym = Symbol("key1")

const JsUser = {
    name: "isha",
    "full name": "isha vishwas",
    [mySym]: "myKey1", // symbol access like this only in [] --> this is the correct syntax 
    age: 18,
    location:"delhi",
    email: "isha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

console.log(JsUser.email) // isha@google.com
console.log(JsUser["email"]) // /isha@google.com

// console.log(JsUser.full name) -- will give error 
console.log(JsUser["full name"]) // isha vishwas  --> only this syntax allowed when "full name" like this the key is wriiten 
console.log(JsUser[mySym]) //myKey1

JsUser.email = "isha@gmail.com"
// Object.freeze(JsUser)
JsUser.email = "isha@chatgpt.com"

// console.log(JsUser) 
/* {
  name: 'isha',
  'full name': 'isha vishwas',
  age: 18,
  location: 'delhi',
  email: 'isha@gmail.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  [Symbol(key1)]: 'myKey1'
} */

JsUser.greeting = function(){
    console.log("Hello JS user") // Hello JS user
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`) // Hello JS user
}

console.log(JsUser.greeting()) // undefined 

console.log(JsUser.greeting) // [Function (anonymous)]

console.log(JsUser.greetingTwo()) // Hello JS user, isha

//console.log(JsUser)
/* {
  name: 'isha',
  'full name': 'isha vishwas',
  age: 18,
  location: 'delhi',
  email: 'isha@chatgpt.com',
  isLoggedIn: false,
  lastLoginDays: [ 'Monday', 'Saturday' ],
  greeting: [Function (anonymous)],
  greetingTwo: [Function (anonymous)],
  [Symbol(key1)]: 'myKey1'
} */




















