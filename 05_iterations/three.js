// for of

// ["" , "" , ""]

// [{}, {}, {}]

const arr = [1,2,3,4,5]
// for of loop
for (const num of arr) {
    console.log(num)
}

const greetings = "Hello World"
for(const greet of greetings){
    console.log(`Each char is ${greet}`)
}

// Maps

const map = new Map()

map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', 'France')
map.set('IN', 'India')

console.log(map) 
/* Map(3) {
  'IN' => 'India',
  'USA' => 'United States of America',
  'FR' => 'France'
} */

for(const [key, value] of map){
    console.log(key, ':-', value)
}
/* IN :- India
USA :- United States of America
FR :- France */

const myObject = {
    'game1' : 'NFS',
    'game2' : 'SpiderMan'
}

// for(const [key, value] of myObject){ // myObject not iterable like this 
//     console.log(key, ':-', value)
// }

