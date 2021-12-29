//in case of var 
//we can reassign variable
//function scope,redeclare,you can access var variable  before declaration 
//
// console.log(a)
// var a;
// console.log(a)
// a=10;
// console.log(a)
// var a;
// console.log(a)

//in case of let 
//1.cannot be accesssed before declaration
//in this case the let variable is in **TEMPORAL DEAD ZONE**
//example
//console.log(a) //temporal dead zone
let a
console.log(a)
//2.blocked scope 
//3.cannot be redeclared  