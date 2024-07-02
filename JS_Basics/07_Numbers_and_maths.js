const score = 200
//console.log(score) // will return 200

const score1 = new Number(score)
//console.log(score1)  // will return [Number: 200]

//console.log(score1.toString) //because of the missing ()after toString it will return [Function: toString]
//console.log(score1.toString()) // will return 200 as a string value

//console.log(score1.toString.length()) //will return an error as () were supposed to be after toString and not length
//console.log(score1.toString().length) // will return 3 as the length as 300 is converted into string

//console.log(score1.toFixed(2)) // wil return output as 200.00

const otherNumber = 123.89788
//console.log(otherNumber.toPrecision(4)) // will return output as 123.9
//console.log(otherNumber.toPrecision(3)) // will return 124
// suppose if otherNumber = 1123.98788 and the precision is 3 it will return 1.12e+3

const hundreads = 10000000
//console.log(hundreads.toLocaleString()) // will return the output in ,. Output will be 10,000,000
//console.log(hundreads.toLocaleString('en-IN')) // will return the output in indian standards. Output will be 1,00,00,000


//===============================================  Maths ===============================================================
// console.log(Math) // will return Object [Math] {}
// console.log(Math.abs(-4)) // will return 4 as negative becomes positive and vice versa is not true
// console.log(Math.round(4.33)) // will 4 only and if after decimal point it is 5 it will return 5 as the output
// console.log(Math.ceil(4.23)) // will return 5 only 
// console.log(Math.floor(4.9)) // will return 4.will take the lowest value onlu. until it's 5.something it will return 4 only

console.log(Math.random()) // will return values randomly from 0 to 1
console.log(Math.floor(Math.random()*10)+1) // will return output from 1 to 10. +1 beczuse we need values starting from 1

const min = 1;
const max = 6;
console.log(Math.floor(Math.random()*(max-min+1)+min)) // keep in mind this formula. Very important
