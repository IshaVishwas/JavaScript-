// Immediately Invoked Function Expressions (IIFE) --> function likhte hi execute karwana

(function chai(){
    // name IIFE
    console.log(`DB Connected`) // DB Connected 
})(); // ; must be used to invoke the next function wrna error ayega 

//()() --> first for definition and second for execution
// gobal scope ke pollution ko hatane k liye IIFE used 

//Unnamed IIFE 
( (name) => {
    console.log(`DB connected Two ${name}`) // DB connected Two isha
})(`isha`)