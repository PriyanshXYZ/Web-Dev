let member = [{ 
    g: 'm', age : 20, income : 200
}, { 
    g: 'f', age : 24 ,income :100
},{ 
    g:'m' ,age :20,income : 70
},{ 
    g:'f' ,age: 30 ,income :50
}
]
//income => less than 100 => income double using map function
//in case of objects  present reference is passed 
// function double(element) {
//     if(element.income<100){
//         element.income*=2
       
//     }
//     return element
// }
// let ans=member.map(double) //here reference is  passed in address
// console.log(ans)


// console.log(member)
//from these we get to know that map makes changes in original array as well which is not good as there is loss of data

//similarly in case of simple array
// array -> primitive vale -> smallere function values
// let incomes = [200, 100, 70, 50];

// function incomeCalc(elem) {
//     if (elem < 100) {
//         elem *= 2;
//     }
//     return elem;
// }
// let newIncomeArray=incomes.map(incomeCalc);
// console.log(newIncomeArray); => here there is pass by value so original array is protected

 
img = "C:\\Users\\priya\\Pictures\\Screenshots\\Screenshot (103).png"

//to solve this issue we will create a copy in the function of array

function double(element) {
    //making copy of element
    //option 1
    let newObj ={...element}
    if(newObj.income<100){
        newObj.income*=2 
    }
    // //option 2
    // let newObj={}
    // for (const key in elem) {
    //     newObj[key] = elem[key]
    // }
    return newObj
}
let copyOfArray=member.map(double)
console.log(copyOfArray)
console.log(member)