//function expects arguments

// function add(a,b){
//     //console.log(a+b)
//     //or we can return value 
//     return a+b
// }

// let sum = add(5,4)//function call 
// console.log(sum)

// //In JavaScript function can be treated as variables in javaScript
//this is also known as First Class Citizen
// let sayHi=function(a){
//     console.log('sayHi',a)
// } //ananymous functions

// sayHi('UwU')

//IIFE (immediately invoked function expression)

let add =(function(a,b){
    return a+b
})(15,30)
console.log(add)