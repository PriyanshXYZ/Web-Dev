//function defination
function sayHi(name) {
    console.log("my name is: " + name);
    name();
    //return {firstName: "Priyansh"}
}
//function invocation => function only runs when it is called 
// let rVal =sayHi("Priyansh Ragit") 
// console.log("rVal: " + rVal) //if we dont return anything to the function then we get this as undefined 

//since in js we do not need to define the type of parameter we passed hence any type of parameter can be passed in function
//array
// let array = [1,2,3,4,5]
// //object
// let obj = { firstName : "Priyansh"}
// //function is also a variable in js ****
function chotaFunction() {
    console.log("this is a function1");
}
// //string 
// sayHi("Priyansh");
// //number
// sayHi(10);
// //reference type
// sayHi(array);
// sayHi(obj);
sayHi(chotaFunction);

