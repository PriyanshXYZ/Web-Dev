//  //functions are variables
//  function outer(param){
//      console.log(param)
//      param()
//  }
//  function chotaFn(){
//      console.log(" i am chota fn");
//  }
//  //1.function can be passed as a parameter to another function
//  outer(chotaFn)

//  //2.function's reference can be stored in another variable 
//  let a=[1,2,3,4,5]
//  let b=a
//  //function expression
//  let anotherName=function (){
//      console.log("I am an expression")
//  }
//  anotherName()

//  //3. function can be returned from another function
//  function fn(){
     
//      return "hello";
//  }
//  let rVal=fn();
//  console.log(rVal)
 
 
 function outer(){
     console.log("hello i  am outer and i am returning inner")
     return function inner(){
         console.log("i am inner " )
     }
 }
 let rVal= outer()
 console.log(rVal)
//  rVal()
