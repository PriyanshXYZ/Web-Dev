const fs=require('fs')
// function printName(name,cb){
//     console.log(name);
//     cb("Ragit");
// }
// function printLastName(lastName){
//     console.log(lastName);
// }

// printName("Priyansh",printLastName)

//any function that is passed as an argument to another function
//any function that us called after function has finished its execution

//Synchronous way of reading files is by default in js
// console.log("before (if there is some function)");
// let data =fs.readFileSync("f1.txt")
// console.log(" "+data)//this " " helps to print the content of data otherwise there will be buffer
// console.log("after reading the data")


//Asynchronous way of reading files 
console.log("before");
fs.readFile("f1.txt",cb)

function cb(err,data){
    if(err){
        console.log(err)
    }
    console.log(""+data)
}
console.log("After")
