//tried in earlier class 26th dec 2021

//problem statement
// add a fn to all arrays which takes as input two callbacks
// one for small string (< 50 in length) and the other for long strings

// short string callback should do the following
// My name is Sumeet Malik. I am a teacher. I teach programming.
// => Malik Sumeet is name My. teacher a am I. programming teach I.

// long string callback should to the following
// I teach programming. I am a teacher. My name is Sumeet Malik.
Array.prototype.processString = function(sscb,lscb,criteria){
    let OrgArr=this
    
    for(let i=0;i<this.length;i++){
        let num=this[i]

        if(num.length>criteria){
             lscb(num)
        }else{
            sscb(num)
        }
    }
    return this //here if we dont return anything we cannot use further functions like map bind and 
}

let arr = [
    "My name is Priyansh Ragit. I am a student. I am learning programming.",
    "India won in Australia. England won't.",
    "India has gone to SA. India started well. But it rains.",
    "Lorem ipsum dolor. ipsum dolor lorem.",
];

let Finalres= arr.processString(handleShortString,handleLongString,40)
let res=Finalres.map(s=>s + "1")
console.log(res)
// let str="My name is Priyansh Ragit. I am a student. I am learning programming."
// handleLongString(str);
function handleShortString(str){
    let res1=str.split(".")
    let res2=res1.filter(s=>s.length>0)//his is done so that an empty element is not created which was created in case of res1
    /*[
  'My name is Priyansh Ragit',
  ' I am a student',
  ' I am learning programming',
  ''                            =>this will get removed
    ]*/
    let res3=res2.map(s=> s.trim())//remove extra spaces before and after in the string
    let res4 =res3.map(s=> s.split(" "))//this will create seperate array of string if there is space 
    /*[
        [ 'My', 'name', 'is', 'Priyansh', 'Ragit' ],
        [ 'I', 'am', 'a', 'student' ],
        [ 'I', 'am', 'learning', 'programming' ]
      ]*/
    
    let res5 =res4.map(s=> s.reverse())//reverse the array
    /*[
        [ 'Ragit', 'Priyansh', 'is', 'name', 'My' ],
        [ 'student', 'a', 'am', 'I' ],
        [ 'programming', 'learning', 'am', 'I' ]
      ]*/
    let res6=res5.map(s=> s.join(" "))//join the formed array with spacing
    /* [
        'Ragit Priyansh is name My',
        'student a am I',
        'programming learning am I'
        ]*/
    let res7=res6.join(". ")//this will join the rest of the array
    //we will not use map above because we have to  join the elements of array and not element's array
    let res8=res7+"."
    console.log("Short String =>"+res8)
    return res8;
}
function handleLongString(str){
    let res1=str.split(".")
    let res2=res1.filter(s=> s.length>0)
    let res3=res2.map(s=>s.trim())
    let res4=res3.reverse()
    let res5=res4.join(". ")
    let res6=res5+"."
    console.log("Long String =>"+res6)
    return res6;
}

