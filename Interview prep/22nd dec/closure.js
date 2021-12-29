// function outer(first){
//     console.log("inside outer")
//     return function inner(second){
//         console.log("inside inner")
//         return first*second;
//     }
// }
// let rVal=outer(3);
// let ans=rVal(4);
// console.log(ans)


//practical example
function enterFirstName(firstName){
    return function enterLastName(lastName){
        return function enterAge(age){
            return function printDetails(){
            console.log("Your Name is "+ firstName+" "+ lastName+" and your age is "+ age)
            }
        }
    }
}
console.log("enter first name")
let ans1=enterFirstName("Priyansh")//this firstname will get out of stack as soon as the ans1 call is finished but due to closure the value of variable is stored till the end of the whole function scope.
console.log("enter last name")
let ans2 =ans1("Ragit")
console.log("enter age")
let ans3=ans2(20)
let print =ans3()