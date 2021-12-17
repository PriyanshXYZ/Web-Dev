const { isNullOrUndefined } = require("util")

let array1 =[1,2,3,4,5]
let array2 =[1,3,100,200]
//find the union of both array without using extra space

for(let i = 0; i < array2.length; i++){
    let currElement = array2[i]
    let isPresent =array1.includes(array2[i])
    if(isPresent== false){
        array1.push(currElement)
    }
}
console.log(array1)