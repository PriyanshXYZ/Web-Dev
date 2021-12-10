// //variable declaration with let var and constructor

// var a;//variable is initialized with undefined variable
// console.log(a);
// a=20
// console.log(a)
// a='Hello'//Dynamic Behavior of JavaScript
// console.log(a)
// //JavaScript is Sychronous Language and a single threaded Language

//loops amd if else
// let flag = true;
// var num =13

// for(let i=2;i*i<=num;i++){
//     if(num%2==0){
//         flag = false;
//         break;
//     }
// }
// if(flag){
//     console.log(num,'is Prime')
// }
// else{
//     console.log(num,'is not Prime')
// }

//2nd Problem with var-scoping  -function scoping and block scoping
//let is blocked scoped 
//var is function scoped
//const as the name suggest cannot be redeclared as well as redefined as

//--xx--Environment , variables(let , var and const), loops , if else , problems with var --xx--


//Strings and string methods--

let str = 'pepcoders'
console.log(str)

// string Methods-
// .length
//console.log(str.length)

//extracting a part of string - slice , substr
//slice(start , end) - returns sliced array from starting index to ending-1
// let slicedStr = str.slice(3 ,7) // last index is excluded
// console.log(slicedStr)

//substr method
//substr(start , length) - staring and the length of the word
// let subString = str.substr(3 , 4 )
// console.log(subString)


// //replace method - expects the word to be replaced as first argument and the replacemnetg as
//  second argument 

// let sayHello = 'Hello Mukesh'
// console.log(sayHello) // hello Mukesh

// let sayBye = sayHello.replace('Hello' , 'bye')
// console.log(sayBye) // Bye Mukesh

// toUppercase  and toLowerCase

// let text1 = 'Hello World'
// let text2 = text1.toUpperCase()
// console.log(text2)

// let text1 = 'Hello World'
// let text2 = text1.toLowerCase()
// console.log(text2)


//concatenation method

// let firstStr = 'Hello'
// let secondStr = 'World'

// let concatenatedStr = firstStr.concat(' ' ,secondStr)
// console.log(concatenatedStr)

// Trim Method

// let text = '   Hello World      '
// console.log(text)
// let trimmedText = text.trim()

// console.log(trimmedText)