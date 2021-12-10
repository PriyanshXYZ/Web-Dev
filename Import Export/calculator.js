function add(a,b){
    console.log('The Sum is',a+b)
}
function sub(a,b){
    console.log('The Difference is ',a-b)
}
function mul(a,b){
    console.log('The Product is ',a*b)
}
function div(a,b){
    console.log('The division is ',a/b)
}

module.exports ={
    Addition : add,
    Subtraction : sub,
    Multiply : mul,
    division : div
}
//module.exports is object provided by Node js by which we can export or import user defined module
//export is done by using key value pair