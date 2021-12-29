//prototype functionality is used to add a new functionality to any predefined function.
Array.prototype.sayHello =function(element){
    console.log("Hello "+element)
}
Array.prototype.sum =function(){
    let sum = 0;
    for (let i = 0; i <this.length; i++){//this => it is a predefined keyword in js that referes to the entity calling the method.
        sum=sum+this[i]
    }
    console.log(sum)
}

Array.prototype.product = function(){
    let product =1
    for (let i = 0; i <this.length;i++){
        product=product*this[i]
    }
    console.log(product)
}
let arr1=[1,2,3]
let arr2=[3,4,5]
// arr1.sayHello('arr1')
// arr2.sayHello('arr2')
arr1.sum()
arr2.sum()
arr1.product()