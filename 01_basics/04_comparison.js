console.log(2>1) //true
console.log(2 >=1) //true

//ese conversions ko avoid karna chaiye
console.log(null > 0) //false
console.log(null == 0) //false
console.log(null >= 0) //true

/* The reason is that an equality check == and comparisons > < >= <= work differently
Comparisons convert null to a number , treating it as o
That's why null >= 0 is true and null > 0 is false 
because 0 >= 0 is true and 0 > 0 is false 
*/

console.log(undefined == 0) //undefined ko kisi se bhi karo false hi ayega

// === strict check // datatype aur value dono check hota hai 

console.log("2" === 2) //false