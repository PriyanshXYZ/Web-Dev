function BOption(contentArr){

    let counter=1
    for(let i = 0; i <contentArr.length; i++){
        if(contentArr[i] !=""){
            contentArr[i]= `${counter} ${contentArr[i]}`
            counter++
        }
    }

console.log(contentArr.join('\n'))
}
module.exports ={
    bOptionKey :BOption
}