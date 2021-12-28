//link https://nados.pepcoding.com/feed/722e77e4-c438-4730-af5a-0c833961dc8e
let fs=require('fs');
function primeSieve(phandler,nphandler){
    let OrgArr=this

    for (let i=0; i <this.length; i++){
        let num = OrgArr[i];
    
    let isPrime=true;
    for(let div=2;div*div<=num;div++){
        if(num % div==0){
            isPrime=false;
            break;
        }
    }
    if(isPrime==true){
        phandler(num)
    }else{
        nphandler(num)
    }
}
}
Array.prototype.sieve=primeSieve;

let arr =[11,18,34,37,49,53,71,84,97];
arr.sieve(logAllPrimes, logAllNonPrimes);

function logAllPrimes(num){
    if(logAllPrimes.calledForTheFirstTime==true){
        if(fs.existsSync("prime.txt")){
            fs.rmSync("prime.txt")
        }
        logAllPrimes.calledForTheFirstTime=false
    }
    fs.appendFileSync("primes.txt",num +"->","utf-8")//here if we dont convert num into string it will give error so to do this we just add empty double inverted commas. 
}
function logAllNonPrimes(num){
    if(logAllNonPrimes.calledForTheFirstTime==true){
        if(fs.existsSync("non-prime.txt")){
            fs.rmSync("non-prime.txt")
        }
        logAllNonPrimes.calledForTheFirstTime=false
    }
    fs.appendFileSync("non-primes.txt",num +"->","utf-8")
}