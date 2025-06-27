const myArr = [0,1,2,3,4,5]
const myHeros = ["ironman" , "doga"]

const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1])

//array methods

// myArr.push(6) // [0,1,2,3,4,5,6]                
// myArr.push(7) // [0,1,2,3,4,5,6,7]
// myArr.pop() // [0,1,2,3,4,5,6]


// myArr.unshift(9) // [9,0,1,2,3,4,5]
// myArr.shift() // [0,1,2,3,4,5]

// console.log(myArr.includes(9)) //false 
// console.log(myArr.includes(3)) //true
// console.log(myArr.indexOf(9)) // -1
// console.log(myArr.indexOf(3)) // 3

const newArr = myArr.join() //adds all the element into a string 

console.log(myArr) // [ 0, 1, 2, 3, 4, 5 ]
console.log(newArr) // 0,1,2,3,4,5 --> as a string because of join()

//slice , splice

console.log("A ", myArr) // A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1,3) // [1,3)
console.log(myn1) // [1,2]
console.log("B ", myArr) // B  [ 0, 1, 2, 3, 4, 5 ]

const myn2 = myArr.splice(1,3)
console.log(myn2) // [ 1, 2, 3 ]
console.log("C ", myArr) // C  [ 0, 4, 5 ]
