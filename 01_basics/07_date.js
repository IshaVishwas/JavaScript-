let myDate = new Date()
console.log(myDate) //2025-06-26T22:32:45.711Z
console.log(myDate.toString()) //Fri Jun 27 2025 04:03:15 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Fri Jun 27 2025
console.log(myDate.toISOString()) //2025-06-26T22:34:59.934Z
console.log(myDate.toLocaleDateString()) // 27/6/2025
console.log(myDate.toLocaleString()) // 27/6/2025, 4:04:59 am
console.log(myDate.toLocaleTimeString()) //4:04:59 am

console.log(typeof myDate) //object

let myCreatedDate = new Date(2023, 0 , 23)
console.log(myCreatedDate.toDateString()) //Mon Jan 23 2023

let myCreatedDate2 = new Date("2023-01-23")
console.log(myCreatedDate2.toLocaleString()) // 23/1/2023, 5:30:00 am

let myTimeStamp = Date.now()
console.log(myTimeStamp) //1750977668195
console.log(myCreatedDate.getTime()) //1674412200000
console.log(Math.floor(Date.now()/1000)) //to convert in seconds //1750977873

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth() + 1)
console.log(newDate.getDay())

