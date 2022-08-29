// Strings

console.log("hello world" [10])
console.log("Frontend simplified is amazing")
console.log("100")
console.log("Shivom" [0])
console.log("12345" .length)
let str = "shivom"
console.log(str [str.length-1])

// Variables

let fullName = "Shivom Paudel"
let isRaining = true
let temperature = 20
let planet = "earth"

temperature = temperature + 2
console.log(temperature)

let celsius = 10
let fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit)

// Equality

let bool = "1" == 1
console.log (bool)

let bools = '1' === 1
console.log(bools)

// Conditionals

let subscribed = false
let loggedIn = true

if (subscribed === true) {
    console.log('show the video')
}
else if(loggedIn === true) {
    console.log('tell the user to upgrade their subscription')
}
else{
    console.log('tell user to log into account')
}

let cash = 111
let price = 100
let difference = cash - price

if(cash > price){
    console.log(`you paid extra - here is your ${difference} change`)
}

else if(cash === price){
    console.log("you paid the exact amount")
}

else{
    console.log(`non enough money - you still owe ${difference *-1} dollars`)
}

//Logical Operators

let cashs = 50
let prices = 40
let isStoreOpen = true

if(cashs >= prices && isStoreOpen === true){
    console.log('print the receipt')
}

// Truthy and Falsy values

let val = "shiv"

if(val){
    console.log(!!val)
}
else{
    console.log(!!val)
}

// Ternary Operators

let subscriibed = false
let loggedInn = true

let Strings = subscribed || loggedInn ? 'show the video' : 'hide the video'
console.log(Strings)

let cash1 = 50
let price1 = 40
let isStoreOpened = true

let checkout = cash1 >= price1 && isStoreOpened ? 'give receipt' : 'do not give receipt'
console.log(checkout)

// Loops

let count = 0

while (count <= 100) {
    console.log(count)
    count = count + 1
}

for (let i = 0; i <= 100; i++) {
    console.log(i)
}

for(let f = 1; f <= 20; f++) {
    console.log(f)

    if(f % 3 === 0 && f % 5 === 0){
        console.log(`${f} ->frontend simplified`)
    }

    else if( f % 3 === 0){
        console.log(`${f} ->frontend`)
    }

    else if(f % 5 === 0){
        console.log(`${f} ->simplified`)
    }

    else {
        console.log(`${f}  -> ${f}`)
    }
}

let word = "Frontend Simplified"

for(let j = 0; j < word.length; ++j) {
    console.log(word[j])
}

// Functions

function welcomePersonToFES(firstname, lastname) {
    console.log(`Welcome to FES, ${firstname} ${lastname}`)
}

welcomePersonToFES('Shivom' , 'Paudel')
welcomePersonToFES('Derek' , 'Passmore')
welcomePersonToFES('Joker' , 'Batman')

function fn(){
    return 'my return'
    console.log('my function')
}

console.log(fn())


function sumof(num1, num2){
    return num1 + num2
}

console.log(sumof(10, 20))

function convertCtoF(C){
    return C * 1.8 + 32
}

console.log(convertCtoF(0))
console.log(convertCtoF(10))
console.log(convertCtoF(30))

const convert = (j) =>{
    return j * 1.8 + 32
}

console.log(convert(0))
console.log(convert(12))
console.log(convert(22))

// Arrays

let arr = [20, 30, 40, 50, 100]

console.log(arr[0])
console.log(arr[arr.length-1])

arr.push(200)

console.log(arr)

let he = [25,35,45,55,77]

let newhe = he.filter((element) => {
    console.log (element)
    if (element < 50){
        return true;
    }
})

console.log(newhe)

let one = [25,35,45,55,77]

let newone = one.filter(element => element <50)

console.log(newone)

let grades = ['A+', 'A', 'FAIL']

let goodgrades = grades.filter((element) => {
    console.log(element)
    if (element !== 'FAIL') {
        return true;
    }
})

console.log(goodgrades)

// let goodgrades = grades.filter(element => element !== 'FAIL')

let map = [1, 4, 9, 16]

let newmap = map.map((elem) => {
    console.log(elem)
    return undefined 
}) 

console.log(newmap)

let dollars = [1, 5, 10, 3]

let newdollars = dollars.map((el) => {
    console.log(el)
    return el * 100
})

//let newdollars = dollars.map(el => el * 100)


console.log(newdollars)

let cents = [0,1,5,10,3]

let centz = []

for(let k = 0; k < cents.length; ++k) {
    centz.push(cents[k] * 100)
}

console.log(centz)

// Objects 

let users = [
    {
    username: 'shivom',
    email: 'shiv@gmail.com',
    password: 1234,
    subscription: 'VIP',
    discordId: 'Kive',
    },
    {
    username: 'shi',
    email: 'shi@gmail.com',
    passwrod: 123,
    subscription: 'VIP',
    discordId: 'Kiv',
    },
]

function login (email, password) {
    for(let o = 0; o < users.length; ++o){
        if (users[o].email === email){
            console.log (users[o])
            if (users[o] .password === password){
                console.log('log the user in - the details are correct')
            }
            else{
                console.log('password is incorrect - try again')
            }
            return;
        }
    }
    console.log('could not find an email that matches')
}

login('shiv@gmail.com', '1234')

// Document Object Model

document.querySelector(".title").innerHTMl = "Kive"

document.querySelector(".title").style.fontSize = '16px'

function changeTitleToRed(){
    document.querySelector(".title").style.color = 'red'
    console.log('clicked')
}
