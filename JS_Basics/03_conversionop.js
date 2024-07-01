let score = 33 // instead of 33 if we initialise null we will get 0 as output and undefined will return undefined
// and if we initialise it as true then it will return 1 else 0 for false
// console.log(typeof score)
// console.log(score)

let score1 = "33abc"
let valueInNumber = Number(score1) // to convert the string to number but as of noe=w will return NaN bcz of number+string
// console.log(typeof score1) // will return string
// console.log(typeof valueInNumber)
// console.log(valueInNumber)  // will return NaN => it is not a number

let isLoggedIn = 1

/* here if we intialise the isLoggedIn with the following we get the corresponding results
1 will return true
" " will return false
"abc" will return true
null will return false
undefined will also return false
*/
let booleanisLoggedIn = Boolean(isLoggedIn)
// console.log(booleanisLoggedIn)

let someNumber=33
let stringSomeNumber = String(someNumber)
// console.log(stringSomeNumber) // will return 33 as a string
// console.log(typeof stringSomeNumber) // will return string


//===========================================***********=============================================================

let str1="1"
let str2 = 2
let str = str1+str2
// console.log("1"+2)
// console.log(1+"2")
// console.log(1+2+"4") // will return 34
// console.log("1"+2+4) // will return 124
// console.log(+true)  //will return 1
// //console.log(true+) //will return an error
// console.log(+"") // will return 0 

// console.log("2">1)  // will return true
// console.log("02">1) // will return true

console.log(null==0) // will return false
console.log(null>0) // will return false
console.log(null>=0) // will return true
console.log(null!=0) // will return true

console.log(undefined==0) // will return false in all the above cases



