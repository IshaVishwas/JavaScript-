//if 

// < , > , <= , >= , == , != , === , !==

// const isUserloggedIn = true
// const temperature = 41

// if(temperature === 50){
//     console.log("less than 50")
// } else {
// console.log("temp is greater than 50")
// }

// console.log("execute")

// const score = 200

// if(score > 100){
//     const power = "fly"
//     console.log(`USER POWER: ${power}`)
// }

// console.log(`USER POWER: ${power}`) --> will give error taht power is not defined (scope se bahar hai)

// short hand notation 

// const balance = 1000

// if(balance>500) console.log("test"),console.log("test2"); // this will work but not a good practice 

// if(balance < 500){
//     console.log("less than 500")
// } else if(balance < 750){
//     console.log("less than 750")
// } else if(balance < 900){
//     console.log("less than 900")
// } else {
//     console.log("less than 1200")
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course")
}

if(loggedInFromGoogle || loggedInFromEmail){
    console.log("User logged in")
}





