function powerFunctionCreator(obj){
    if(typeof obj.exp !=='number'){
        console.log("exp must be a number");
        return null;
    }
    let powerFn=function(base){
        let rv=Math.pow(base, obj.exp)
        return rv;
    }
    return powerFn;
}
let obj = {
    exp:2
}

let squarer=powerFunctionCreator(obj)
let sqr8=squarer(8)
console.log(sqr8)
//memory map & debug (try)

obj.exp=3
let cuo8=squarer(8)
console.log(cuo8)