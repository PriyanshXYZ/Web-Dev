# TODAYS TOPICS ARE 

- callbacks question
    - use of new array prototype processString(which is a higher order function)
    - use of map,trim,join,filter,split
    
- `this` use using question.
    - use of obj 
    - use of global and local variable 
- constructors 
    - how are they created
    - how memory is allocated in this
---
### some points i learned using this examples are
- arrow function 
    - shouldnt be used in object
    - shouldnt be used with `this`
    - shouldnt have arguments 
    - cannot be used as constructor
---
- when obj.fun1() is called  `this` refers to value in obj
- when p1=new person(i.e constructor) `this` refers to new obj
```javascript
function person(name,age){
    this.name = "rahul";
    this.age = 22;
    this.sayHi=function(f1){
    console.log("name is "+name+" and age is "+age+" says hi to "+f1);
}
}
let p1=new person("Priyansh Ragit",20)//this is constructor invocation
p1.sayHi("wolfie")
```
- when we use call,bind,apply we get `this` as the parameter passed to the constructor
- when fun1() is called  `this` refers to global obj
```javascript
function fun(){
    this.a=10;
    console.log(a) //ans is 10 here 
}
fun()
//**when fun is called this:window/global window will get the parameters of function in global window** 
console.log(a)//ans is 10 here 
```
-if we dont declare any type to the variable/function then  **_it is global_** 
```javascript
function fun(){
    a=10;
    console.log(a)
}
fun()
console.log(a)
//no error as variable doesnt have type so its global
```
- in case of `no` type of declaration [inside the function]() we get variable declared as **global** if we `declare` type we get it **function or blocked scope**   
```javascript
function fun(){
    let a=10;
    console.log(a)
}
fun()
console.log(a) //=>error a is not defined as let is blocked scope
```

-if we want to use additional function to a created polyfill/function it must have a return type
```js
let Finalres= arr.processString(handleShortString,handleLongString,40)
let res=Finalres.map(s=>s + "1") //if this Finalres doesnt have a value(i.e function doesnt return) then this will give error.
console.log(res)
 
```
---
### mixed question which is helpful to get all of the concepts of today.
- [Question]()
--- 