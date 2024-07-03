let myDate = new Date()
// console.log(myDate) // will return 2024-07-03T05:02:15.959Z
// console.log(myDate.toString()) // Wed Jul 03 2024 05:02:15 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString()) // will return Wed Jul 03 2024
// console.log(myDate.toLocaleString()) // will return 7/3/2024, 5:06:09 AM
// console.log(typeof myDate) // will return object

let myCreatedDate = new Date(2023,0,23)
// console.log(myCreatedDate.toDateString) // will return [Function: toDateString] bcz of missing () after .toDateString
// console.log(myCreatedDate.toDateString()) // Mon Jan 23 2023 
// Point to remember that in JavaScript month starts from 0
// when it is in single digit month starts from 0 else if it is 01 it starts from january
let myDate1 = new Date("2023-01-23")
console.log(myDate1.toDateString()) // will return Mon Jan 23 2023
