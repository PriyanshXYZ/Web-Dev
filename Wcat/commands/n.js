function NOption(contentArr){
    
    for(let i = 0; i <contentArr.length; i++){
        contentArr[i]=`${i+1} ${contentArr[i]}`
    } 

console.log(contentArr.join('\n'))
}
module.exports ={
    nOptionKey : NOption
}