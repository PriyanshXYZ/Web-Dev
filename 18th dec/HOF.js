//higher order functions are function which passes functions in parameters or returns the functions




//************************** */foreach ****************/
//for each => its does a task for every element of the array
let array1 = ['a', 'b', 'c'];

function printElem(element){
    console.log(element)
}
array1.forEach(printElem)
//************************* */
//foreach function prototype 
function foreach(element) {
    for(let i = 0; i < element.length; i++){
        console.log(element[i]);
    }
}
let ans1=foreach(array1);



//************************* */every****************
//if every element satisfies the condition given by parameter it returns true else false
function isBelowThreshold(currentValue) {return currentValue < 40;}

let array2 = [1, 30, 39, 29, 10, 13];

console.log(array2.every(isBelowThreshold));
//************************************** */
//every function prototype
function every(element,cb){
    for(let i = 0; i < element.length; i++){
        if(cb(element)==false){
            return false;
        }
    }
    return true;
}

//********************* */some***********
//if any one of elements satisfies the condition given by parameter it returns true
const array = [1, 2, 3, 4, 5];

// checks whether an element is even
function even(element) {return element % 2 === 0;}

console.log(array.some(even));
// expected output: true
//some function prototype
function some(element,cb) {
    for(let i = 0; i < element.length; i++){
        if(cb(element)==true){
            return true;
        }
    }
    return false;
}


//********************* */find idx*******
const array1 = [5, 12, 8, 130, 44];

function isLargeNumber(element) {
    return element > 13;
}

console.log(array1.findIndex(isLargeNumber));
// expected output: 3
//find idx prototype
function findidx(element,cb) {
    for(let i = 0; i < element.length; i++){
        if(cb(element[i])==true){
            return i;
        } 
    }
    return -1;
}
console.log(findidx(array1,isLargeNumber));

