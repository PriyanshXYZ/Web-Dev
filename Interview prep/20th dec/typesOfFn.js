//mainly js function are of these types
//1.function defination
//2.function expression
//3.IIFE immediately invoked function expression
//4.anonymous function 
    //4.1.ananymous function expressiom
    //4.2.anonymous IIFE


//1.  function definition
// function fn() {
//     console.log("I am function definition");
// }
// fn();
// variable assignement
// let a = [10, 20, 30];
// let b = a;
// console.log(b);

//2. function expression
// let secondName =function original(){
//     console.log("I am function expression");    
// }

//secondName()
//original()//this cannnot be printed because its value is already assinged to secondName variable

console.log("before execution"); //here semicolon is imp as js interprets iife and console.log both as function and due to this we get error
//3. immidietly invoked function expression
(function drawIt() {
    console.log("I am immidietly invoked function expression")
})
();
console.log("after execution")

//4. ananymous function
//ananymous function expression
// let ananymous = function(){
//     console.log("I am ananymous function expression")
// }
// console.log(ananymous);
//ananymous immidietly invoked function expression
// (function() {
//     console.log("I am ananymous immidietly invoked function expression")
// })()




