/* in javascript memory is classified into two:
Stack memory: used with the primitive datatypes.
    whenever we use the stack memory, the variables that we declare we get a copy of it
Heap memory: used with the non-primitive datatypes
    whenever we use the heap memory, the objects or functions that we declare we get a reference of the original value 
*/

let myYoutubeName = "Ashutosh21"
let anotherName = myYoutubeName
//console.log(anotherName)
anotherName ="Rakesh34"
//console.log(anotherName)  // now the value will change as is it just copying the previous value
//console.log(myYoutubeName) // will return the same as initialised


// Heap Memory
let user1={
    email:"ashutosh21@gmail.com", // "comma" is mandatory if you are declaring two variables
    id : 1234,
}

let user2 = user1
user2.email = "rakesh34@gmail.com" // we can use dot operator inoder to access attributes of the first object
console.log(user1.email) // the value will change from "ashutosh21@gmail.com" to "rakesh34@gmail.com" since it takes the reference
console.log(user2.email)

