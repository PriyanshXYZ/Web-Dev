function powerFunctionCreator(exp){
    if(typeof exp !='number'){
        console.log("exp must be a number");
        return null;
    }
    let powerFn=function(base){
        let rv=Math.pow(base, exp)
        return rv;
    }
    return powerFn;
}

let squarer=powerFunctionCreator(2)
let sqr8=squarer(5)
console.log(sqr8)
//memory map & debug (try)