
// case 1: if function doesnt return anything
//{
//function defination
function sayHi(name) {
    console.log("Hello",name);
}

//function invocation => this line actually runs the  function defination
sayHi("Priyansh")
//if we called the function =>this will print what is the parameter 
console.log(sayHi)

//in js if we dont return anything in function defination then this will rprint undefined
let ret = sayHi("Priyansh")
console.log(ret)
//if we dont pass anything in function defination then this will give you undefined parameter
sayHi()
//}

//case 2: if function returns something
function sayHello(name) {
    console.log("Hello",name)
    return "this is what function has returned"
}

let retVal=sayHello("Priyansh")
console.log(retVal) //this case what is returned will get printed
sayHello()//this case will be same as in case we havent returned anything.