/*arrays copy operations create shallow copies rather than deep copies(a shallow copy of an object is a copy whose properties share the same properties
(point to the same underlying values)as those of the source object from which the copy was made)*/

const myArr = [1,2,3,4,5] // in JavaScript array can store values with different datatypes
// console.log(myArr[1]) // will return 2 as indexing starts from 0

// can also be declared in
const myArr1 = new Array(1,2,3,4)
// console.log(myArr1[2]) // will return 3

// Some of the frequently used Array methods
myArr.push(6)
// console.log(myArr) // will return [1, 2, 3, 4, 5, 6]

myArr.unshift(9) // used inorder to add elements in the starting
// console.log(myArr) // here unshift will add 9 to the start of the array and will shift all the items

myArr.shift() // used inorder to remove elements from the starting
// console.log(myArr) // here shift will remove the 9 that was inserted


// console.log(myArr.includes(3)) // returns in either true or false by checking whether the elements exists or not
// console.log(myArr.indexOf(9)) // will return -1 for any value that is not mentioned in the index


const newArray = myArr.join() // converts the array in the form of a string
// console.log(myArr) // will return [1, 2, 3, 4, 5, 6]
// console.log(newArray) // will return 1,2,3,4,5,6. The typeof(newArray) is string


// Concept of slice and splice

console.log("A", myArr) // returns A [1, 2, 3, 4, 5, 6]

const myNewArray = myArr.slice(1,3)
console.log(myNewArray) // will return [2, 3] // excludes 3 index
console.log("B", myArr) // B [1, 2, 3, 4, 5, 6]

const myNewArray1 = myArr.splice(1,3) // removes the elements spliced
console.log(myNewArray1) // without parameters in splice will return [] // [2, 3 , 4]
console.log("C",myArr) // will return c[1, 5, 6] 

// it would be wrong to say that slice returns elements excluding the upper range and splice return all the values upto upper range
// infact slice 












