const myObject =  {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
} 

for (const key in myObject) {
    console.log(`${key} shortcut is for ${myObject[key]}`)

}

const programming = ['js', 'rb', 'py', 'java', 'cpp']

for(const key in programming){
    //console.log(key) // 0 1 2 3 4
    console.log(programming[key])
    /*  js
        rb
        py
        java
        cpp */
}

// const map = new Map()

// map.set('IN', 'India')
// map.set('USA', 'United States of America')
// map.set('FR', 'France')
// map.set('IN', 'India')

// for(const key in map){
//     console.log(key) // no error but no output ... map is not iterable
// }

// objects k liye use for in
// arrays k liye use for of 