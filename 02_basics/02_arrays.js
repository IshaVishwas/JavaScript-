const marvel_heros = ["thor", "ironman" , "spiderman"]
const dc_heros = ["superman" , "flash" , "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros) //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][1]) // flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// Spread operator(...)
const all_new_heros = [...marvel_heros, ...dc_heros] //spread out values 
console.log(all_new_heros) // [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array) // [1,2,3,4,5,6,7,6,7,4,5]


console.log(Array.isArray("Isha")) // false 
console.log(Array.from("Isha")) // [ 'I', 's', 'h', 'a' ]

console.log(Array.from({name: "Isha"})) // [] --> empty array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)) // [ 100, 200, 300 ]






