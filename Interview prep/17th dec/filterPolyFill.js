let array = [1,3,5,6,7,8,15,18,19];

function oddTest(number) {
    return number % 2 == 1;
}

function evenTest(number) {
    return number % 2 == 0;
}
function isPrime(number){
    let isprime = true;
for(let j = 2; j*j<= number;j++){
    if(number%j==0  ){
        isprime = false;
    }
}
return isprime;
}

function myFilter(arr,cb){
    let newArray =[];
    for (let i = 0; i < arr.length; i++){
        let ans=cb(arr[i])
        if(ans==true)
            newArray.push(arr[i]);
        }
        return newArray;
}

// let newArray1 =myFilter(array,oddTest)
// let newArray2 =myFilter(array,evenTest)
// console.log(newArray1)
// console.log(newArray2)
let newArray = myFilter(array,isPrime)
console.log(newArray)