// function powerCreator(exp){


//     return function fun(base){
//         let rVal=Math.pow(base,exp);
//         return rVal
//     }
// }

// let squarer= powerCreator(2)
// let ans =squarer(8)
// console.log(ans)

//sumeet sir ans 
//create an obj and add outer parameter in it
function powerCreator(obj){


    return function fun(base){
        let rVal=Math.pow(base,obj.exp);
        return rVal
    }
}
obj={
    exp:2
}
obj.exp=3
let squarer= powerCreator(obj)
let ans =squarer(7)
console.log(ans)
//try memory mapping 