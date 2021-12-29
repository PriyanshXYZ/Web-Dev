Array.prototype.myFilter= function (cb){
    let newArray =[];
    for (let i = 0; i < this.length; i++){
        let ans=cb(this[i])
        if(ans==true)
            newArray.push(this[i]);
        }
        return newArray;
}
function isPrime(number){
    let isprime = true;
if(number>1){
    for(let j = 2; j*j<= number;j++){
        if(number%j==0  ){
            isprime = false;
        }
    }
}
return isprime;
}

let array = [1,3,5,6,7,8,15,18,19];
let newArray =array.myFilter(isPrime)//previously we needed to pass arr in paramter of myfilter function(refer to filterPolyFil.js) so using Array.prototype we can use it in given form
console.log(newArray)