function fun(a,b){
    console.log(a +" " + b )
    console.log(arguments)
    let res=Array.from(arguments)
    let ans=res.map(squarer)
    console.log(ans)
}
function squarer(element){
    return element* element;
}
fun()
fun(10,20)
fun(10,20,30)