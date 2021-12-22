//var is function scope
var a;
function fn(){
    console.log("before declaration",a)
    var a;
    console.log("After declaration",a)
    a=20;
    if(true){
        var a =30
        console.log("35",a)
    }
    console.log("After initization ",a)
}
a=10;
fn()
console.log("After initization ",a)
