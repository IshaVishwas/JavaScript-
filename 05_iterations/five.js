// for each loop --> uses callback function

const coding = ['js', 'ruby', 'java', 'python', 'cpp']

// coding.forEach(function (item) {
//     console.log(item) 
//     /*  js
//         ruby
//         java
//         python
//         cpp      */
// })

// coding.forEach( (item) => {
//     console.log(item) //same output as above 
// }) 

// function printMe(item){
//     console.log(item)
// }

// coding.forEach(printMe) // same output as first

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr)
    /*  js 0 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
        ruby 1 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
        java 2 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
        python 3 [ 'js', 'ruby', 'java', 'python', 'cpp' ]
        cpp 4 [ 'js', 'ruby', 'java', 'python', 'cpp' ]      */
})


const myCoding = [
    { languageName: 'javaScript' ,
      languageFileName: 'js'
    },

     { languageName: 'java' ,
      languageFileName: 'java'
    },

     { languageName: 'python' ,
      languageFileName: 'py'
    },

]

myCoding.forEach( (item) => {
    console.log(item.languageName) // javaScript java python
})