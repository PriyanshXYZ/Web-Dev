// function fn(param1, param2){
//     console.log(param1,param2)
// }
// fn("hello","hi")
//in this case second parameter  will be undefined 
// fn('hello')
//both parameters will be undefined
// fn()
//in this case there is extra argument  so js ignores the extra parameter and program will run successfully.
// fn("hello","hi","bye")


//arguments => this prints the idx and value of parameter. just like array in form of obj
function fn(param1,param2){
    console.log(arguments);
    console.log(param1,param2)
}
fn()
fn('hello')
fn("hello","hi")
fn("hello","hi","bye")
