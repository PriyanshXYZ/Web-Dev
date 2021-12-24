Array.prototype.myReduce = function(cb, initial) {
    let accumulator;
    let start= 0;
    if(initial){
        accumulator = initial
    }else{
        accumulator =this[0]
        start =1;
    }
    for(var i=start; i<this.length; i++){
        accumulator =cb(accumulator,this[i],i,this)
    }
    return accumulator
}
function sum(storage,elem){
    return storage+elem;
}

let arr = [1,2,3,4,5];

let finalSum =arr.myReduce(sum)
console.log(finalSum);