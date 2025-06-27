//{} --> scope
//var c = 300 //global scope 
let a = 300 // global scope 

if(true){
    let a = 10
    const b = 20 // these are block scope
    console.log("INNER: ", a) // 10 Because of block scope 
    //var c = 30
}
console.log(a) // 300 because of global a 
//console.log(a) //not defined
// console.log(b) //not defined 
// console.log(c) //30 // because of this var is not used as scope of c was till the curly braces but still the value is being printed which is wrong






