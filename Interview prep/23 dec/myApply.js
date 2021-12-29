Function.prototype.myApply = function() {
    let orgFn=this;
    let orgArgs=Array.from(arguments);

    let thisOrgFn=orgArgs[0];
    let params=orgArgs[1];
    
    thisOrgFn.fun =orgFn;
    thisOrgFn.fun(...params)
    delete thisOrgFn.fun;

}
let obj={
    fun1 : function(frnd1,frnd2){
        console.log("I am named "+this.fullName+" my age is "+this.age)
        console.log(this.fullName +" says hi to "+frnd1)
        console.log(this.fullName +" says hi to "+frnd2)
        console.log(arguments)
    },
    fullName : "Priyansh Ragit",
    age : 20
}

let o2={
    fullName : "Sumit",
    age : 34
}

obj.fun1.myApply(o2,["navdeep","vikas"])