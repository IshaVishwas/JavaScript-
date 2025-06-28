// for

for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element)
    
}

for (let i = 1; i <= 10; i++) {
    //console.log(`Outer loop value: ${i}`)
    for (let j = 1; j <= 10; j++) {
    //console.log(`Inner Loop Value: ${j} and Outer loop value: ${i}`)
    //console.log(i + '*' + j + '=' + i*j)
    
    }
    
    
}

let myArray = ["flash", "batman", "superman"]
//console.log(myArray.length)
for(let i = 0; i < myArray.length; i++){
    const element = myArray[i]
    //console.log(element)
}

// break and continue

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`)
        break // control flow ko break karne k liye
    }
    console.log(`value of i is ${index}`);
    
}

for (let index = 1; index <= 20; index++) {
    if(index == 5){
        console.log(`Detected 5`)
        continue //ek baar ke liye condition skip then continue 
    }
    console.log(`value of i is ${index}`);
    
}