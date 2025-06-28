const user = {
    username: "isha",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username}, welcome to website`) // current context k liye this lagta hai 
        //console.log(this)
        /* isha, welcome to website
        {
            username: 'isha',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
            }
            sam, welcome to website
            {
            username: 'sam',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        } */

    }


}

// user.welcomeMessage() // isha, welcome to website 
// user.username = "sam"
// user.welcomeMessage() // sam, welcome to website

//console.log(this) // {} --> when it is outside everything and nothing else it is refering 

// function chai(){
//     // let username = "isha" and then console.log(this.username) is done then the output will be undefined means we cannot use this keyword with functions  
//     console.log(this) // inside the function in node environment you will get a lot of values as output 
// }

// chai()

// const chai = function(){
//     let username = "isha"
//     console.log(this.username)
// }

// arrow function --> function word hatado aur () ke baad => lagado
// const chai = () => {
//     let username = "isha"
//     console.log(this.username) //if only this is used then output will be {}
// }

// chai() // udefined 

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// one more way to do this is implicit return

// const addTwo = (num1, num2) => num1 + num2 // curly braces{} me wrap kia to return likhna hoga but parenthesis() me wrap kia to return nhi likhna padega 

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: "isha"}) // to get the output of object it is necessary to wrap it in parenthesis ()

console.log(addTwo(2,3))

