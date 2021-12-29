//let variable is bloacked scope
let a
function fn(){
    //console.log("Before declaration",a)//here let will give error
    let a;
    console.log("after declaration",a)
    a=20;
    //block scope
    if(true){
        let a=30;
        console.log("35",a)
    }
    console.log("After initization",a)
}
a=10;
fn()
console.log(a)