function sayMyName(){
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");    
}

//sayMyName() //this is execution //o/p is I S H A in vertical
//sayMyName // this is reference // gives not output 

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2)  // 8
// } 
// const result = addTwoNumbers(3,5)
// console.log("Result: ", result) // undefined 

function addTwoNumbers(number1, number2){
    let result = number1 + number2
    return result 
    // return number1 + number2
    //console.log("isha") //unreachable code because return statement is above it 
} 

const result = addTwoNumbers(3,5)
console.log("Result: ", result)

// addTwoNumbers(3,4) // 7
// addTwoNumbers(3, "4") // 34
// addTwoNumbers(3, "a") //3a

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username")
        return // iske baad kuch execute ni hoga 
    }
    return `${username} just logged in`
}

//loginUserMessage("isha") //nothing run 
//console.log(loginUserMessage("isha")) // isha just logged in
//console.log(loginUserMessage()) /* Please enter a username
                                  // undefined */

function calculateCartPrice(...num1) { // ... is rest operator --> if not used then only first value passed would be printed 
    return num1
}
console.log(calculateCartPrice(20,23,45)) // [ 20, 23, 45 ]

// function calculateCartPrice(val1, val2, ...num1) {
//     return num1
// }
// console.log(calculateCartPrice(20,23,45,67,89)) // [45,67,89] because val1 = 20 and val2 = 23 and rest will be passed to num1 because of ... (rest) operator 

// how to pass object in a function 
const user = {
    username: "isha",
    price: 100
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`)
}

//handleObject(user) // Username is isha and price is 100

handleObject({
    username: "sam",
    price: 122         // Username is sam and price is 122
})

const myNewArray = [200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArray)) // 400








