//{} --> scope
//var c = 300 //global scope 
let a = 300 // global scope 

if(true){
    let a = 10
    const b = 20 // these are block scope
    //console.log("INNER: ", a) // 10 Because of block scope 
    //var c = 30
}
//console.log(a) // 300 because of global a 
//console.log(a) //not defined
// console.log(b) //not defined 
// console.log(c) //30 // because of this var is not used as scope of c was till the curly braces but still the value is being printed which is wrong

function one() {
    const username = "isha"

    function two(){
        const website = "youtube" //inner function can access outer function variables but outer function cannot access inner function variable 
        console.log(username)
    }

    //console.log(website) // will give error as this is not in this scope 
    //two() // isha --> with this one() should be called to access the username is one() is not called then there will be no output with two()
}

one() //isha

if(true){
    const username = "isha"
    if(username === "isha"){
        const website = " youtube"
        //console.log(username + website) // isha youtube 
    }

    //console.log(website) --> will give error out of scope 
}

//console.log(username) --> will give error not in scope 

// ************** INTERESTING ********************

console.log(addone(5)) // 6 will be executed 
function addone(num){
    return num + 1
}


//console.log(addTwo(5)) // will give error because of the way of initialisation
const addTwo = function(num){
    return num + 2
}




