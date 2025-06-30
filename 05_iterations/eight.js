// reduce() method executes a user supplied "reducer"

 const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (acc, currval){
//     console.log(`acc: ${acc} and currval: ${currval}`)
//     return acc + currval
// }, 0) // this 0 is start of acc , you can change it according to your condition

// console.log(myTotal) // 6 --> 0 + 1 = 1
//                           //  1 + 2 = 3
                           // 3 + 3 = 6 // returns 6


// LET'S TRY THE SAME WITH ARROW FUNCTION

const myTotal = myNums.reduce( (acc, currval) => acc + currval , 0 )

console.log(myTotal)

const shoppingCart = [
    {
        itemName: 'js course' ,
        price: 2999
    },

        {
        itemName: 'python course' ,
        price: 999
    },

        {
        itemName: 'mobile dev course' ,
        price: 5999
    },

        {
        itemName: 'data science course' ,
        price: 12999
    },

]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay) // 22996