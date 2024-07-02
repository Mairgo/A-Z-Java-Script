const name = "Mainak"
const repo = 4
//console.log(name + repo) // will return Mainak4. usuallynot preferred

//console.log(`Hey hi! I am ${name}. Hope you sre doing good. I have ${repo} repositories`) // will return Hey hi! I am Mainak. Hope you sre doing good. I have 4 repositories
/*
in todays date we use ``(backticks)[string interposition] meaning we create placeholders
*/

// other ways for naming a variable
const gameName = new String("Maiank")
// console.log(gameName)
// console.log(gameName[2]) // stored as object in the form of key and value pair, here key is 2 and value is "i"
// console.log(gameName.toUpperCase())
// console.log(gameName.charAt(2))

const anotherName = gameName.substring(0,4) // will not accept negative values
//console.log(anotherName)

const name1 = gameName.slice(-5.3) // will accept negative values and willreturn in reverse
//console.log(name1)

const name2 = "     Mainak  "
console.log(name2) // wil return with the extra spaces
console.log(name2.trim())  // used inorder to remove extra spaces

const url = "https://mainak.com/mainak%20bhatta"
console.log(url)
console.log(url.replace("%20","-"))  // will replace "%20" with "-"

console.log(url.includes("mainak"))

console.log(url.split("/")) // will return the output in the forrm of an array