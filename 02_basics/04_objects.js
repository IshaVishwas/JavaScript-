// const tinderUser = new Object() --> singleton object 

const tinderUser = {} // --> non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser); // { id: '123abc', name: 'Sammy', isLoggedIn: false }

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname:{
            firstname: "isha",
            lastname: "vishwas"
        }
    }
}

console.log(regularUser.fullname); // { userfullname: { firstname: 'isha', lastname: 'vishwas' } }
console.log(regularUser.fullname.userfullname); // { firstname: 'isha', lastname: 'vishwas' }
console.log(regularUser.fullname.userfullname.firstname); // isha 
console.log(regularUser.fullname.userfullname.lastname); // vishwas

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}
// console.log(obj3) // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)
// console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const obj3 = {...obj1, ...obj2}
console.log(obj3) // { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

const users = [
    { id: 1,
      email: "is@gmail.com"
    },
    {

    },

    {

    }, //so on 
]

//how to access 
// console.log(users[1].email)

console.log(tinderUser) // { id: '123abc', name: 'Sammy', isLoggedIn: false }

console.log(Object.keys(tinderUser)) // [ 'id', 'name', 'isLoggedIn' ]
console.log(Object.values(tinderUser)) // [ '123abc', 'Sammy', false ]
console.log(Object.entries(tinderUser)) // [ [ 'id', '123abc' ], [ 'name', 'Sammy' ], [ 'isLoggedIn', false ] ]

console.log(tinderUser.hasOwnProperty("isLoggedIn")) // true 
console.log(tinderUser.hasOwnProperty("Sammy")) // false 
console.log(tinderUser.hasOwnProperty("isLogged")) // false 


/* ********** object destructuring *********** */

const course = {
    coursename: "js full",
    price: "999",
    courseInstructor: "isha"
}

// course.courseIntructor

const {courseInstructor} = course // destructor
// const {courseInstructor: istructor} = course //now if print then write instructor like console.log(instructor) //o/p will be isha 

console.log(courseInstructor) // isha .... no need to write course.courseIntructor everytime

//JSON .. KEYS AND VALUES BOTH ARE STRING 
// {
//     name: "isha"
//     coursename: "js"
//     price: "free"
// }




