// Define the numbers and the operation here
let firstNumber = 14
let secondNumber = 2
let operation = "+"

if ( operation == "+"){
    console.log(firstNumber + secondNumber);
}else if ( operation == "-"){
    console.log(firstNumber - secondNumber);
}else if ( operation == "*"){
    console.log(firstNumber * secondNumber);
}else if ( operation == "/"){
    console.log(firstNumber / secondNumber);
}else{
    "You assign a wrong operation"
}

// Another solution using ternary operator
// let sum = (operation == "+") ?  (firstNumber + secondNumber) : 
// (operation == "-") ? (firstNumber - secondNumber) : 
// (operation == "*") ? (firstNumber * secondNumber) : 
// (operation == "/") ? (firstNumber / secondNumber) : "You assign a wrong operation";


// Another solution using ternary operator
let sum = (operation == "+" || "-" || "*" || "/") ?  eval(`${firstNumber} ${operation} ${secondNumber}`) : "You assign a wrong operation"


console.log(sum);




// Write if-statements here

