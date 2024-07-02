// Primitive datatypes(referred to as call by methods)
// 7 types: string, number, boolean, symbol, null, undefined, bigInt

const id=Symbol(123)
const anotherid = Symbol("123")
//console.log(id===anotherid) // will return false

// Non primitive datatypes(referred to as call by reference)
// arrays, objects, functions

const heros = ["shaktiman","doga","naagaraj"] // used for declaring an array 


let obj={                               // used for declaring objects
    name: "Ashutosh",
     age: 19,
} 


const myFunc = function()       // used for declaring functions. Tkae care of the syntax
{
    console.log("Hello World");
}

console.log(typeof myFunc)     // the typeof will return function

// the "typeof" of non-primitive datatypes will return objects as the output