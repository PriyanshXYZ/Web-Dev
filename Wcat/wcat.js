// #!/usr/bin / env node
const fs = require('fs')
const SObj=require('./commands/s')
const BObj=require('./commands/b')
const NObj=require('./commands/n')
//to take input from console
let inputArr =process.argv.slice(2);
//console.log(inputArr)

//seperate options and content of files
let optionsArr =[];
let fileArr=[];
for(let i = 0; i < inputArr.length; i++){
    if(inputArr[i].charAt(0)=="-"){
        optionsArr.push(inputArr[i]);
    }
    else{
        fileArr.push(inputArr[i]);
    }
}
// console.log(fileArr)
// console.log(optionsArr)

//options check /edge cases check
let isBothPresent = optionsArr.includes('-n') && optionsArr.includes('-b')
if(isBothPresent ==true){
    console.log("either enter -n or -b not both :(")
    return
}
//existence of file
for(let i=0;i<fileArr.length; i++){
    let bufferContent=fs.existsSync(fileArr[i])
    if(bufferContent == false){
        console.log("please enter a valid file which exists")
        return
    }
}



//read 
let content =""
for(let i=0;i<fileArr.length;i++){
    //buffer 
    let bufferContent =fs.readFileSync(fileArr[i]);
    content += bufferContent+'\r\n';
}
//console.log(content)


//putting content in form of array so as to implement -s
let contentArr =content.split('\r\n')
//console.log(contentArr)

//if no option is provided in console return the concatenated array
if(optionsArr.length==0){
    console.log(contentArr)
}

//if -s is present then call the function
let isPresentS = optionsArr.includes('-s')
if(isPresentS==true){
    SObj.sOptionKey(contentArr)
}


//if -n is present call the function
let isPresentN =optionsArr.includes('-n')
if(isPresentN == true){
    NObj.nOptionKey(contentArr)
}


//if -b is present call the function 
let isPresentB =optionsArr.includes('-b')
if(isPresentB == true){
    BObj.bOptionKey(contentArr)
}

