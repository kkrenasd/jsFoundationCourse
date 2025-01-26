//day one (hw)

// let firstName = "Wang" 
// var personAge = 32

// console.log("My dad's name is")
// console.log(firstName)
// console.log("He is ")
// console.log(personAge)
// console.log("years old.")

// //day two
// const bornYear = 2010
// const currentYear = 2024
// const age = currentYear - bornYear 

// console.log(age)

// let x = 120937
// let y = -123123

// if (x) {
//     console.log("It is postive!")
// } else {
//     console.log("bruh what the hellllll.")
// }

// //Positive and negative numbers are true in boolean terms

// if (y) {
//     console.log("You will see this!")
// } else {
//     console.log("u wont see this.")
// }

// //day two (hw)

// const massMark = 78
// const heightMark = 1.69
// const massJohn = 92
// const heightJohn = 1.95

// const BMIMark = massMark / (heightMark * heightMark)
// console.log (BMIMark)
// const BMIJohn = massJohn / (heightJohn * heightJohn)
// console.log (BMIJohn)

// if (BMIMark > BMIJohn) {
//     console.log("Mark's BMI is greater than John's!")
// } else {
//     console.log("Mark's BMI is lesser than John's!")
// }



// const day = 'wednesday'
 
// if ( day === "monday" ) {
//     console.log('BBQ day')  
//     console.log('and we are so happy')
// } else if ( day === "tuesday" ) {
//     console.log("we are stay home")
// } else if ( day === "wednesday" || day === "thursday" ) {
//      console.log("today is rainning")
//  }else if ( day === "friday" ) {
//     console.log("Yay, today is friday")
// } else if ( day === "saturday" || day === "sunday") {
//     console.log("the weekend is ending now...")
// } else {
//     console.log("the day is invalid")
// }


// const day = 'wednesday';
 
// switch (day) {
//     case 'monday':
//         console.log('BBQ day')
//         console.log('and we are so happy')
//     case 'tuesday':
//         console.log('we are stay home')
//         break;
//     case 'wednesday':
//     case 'thursday':
//         console.log('today is rainning')
//         break;
//     case 'friday':
//         console.log('Yay, today is friday')
//     case 'saturday':
//     case 'sunday':
//         console.log('the weekend is end now...')
//     default:
//         console.log('not a valid day')
// }


let number1 = Number(prompt("Please enter a number"))
let number2 = Number(prompt("Please enter another number"))

if ( isNaN(number1) || isNaN(number2) ) {
    console.log ("Please enter valid numbers")
}

const operation = prompt("Please choose an operation: addition, subtraction, multiplication, division").toLowerCase()
let result
switch (operation) {
    case "addition" :
        result = number1 + number2
        break;
    case "subtraction" :
        result = number1 - number2
        break;
    case "division" :
        result = number1 / number2
        break;
    case "multiplication" :
        result = number1 * number2
        break; 
    default:
        console.log("Invalid operation.")
}

const round = prompt("Would you like to round your number?").toLowerCase()
if (round === "yes") {
    Math.round(result)
}

if (result > 100) {
    console.log (result + " is a big number!")
} else {
    console.log (result + " is a small number!")
}

if (Number. isInteger (result/2)) {
    console.log( result + " is even!")
} else {
    console.log( result + " is odd!")
}