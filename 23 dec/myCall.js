Function.prototype.myCall = function(){
    let OrgFn=this;
    let OrgArgs =Array.from(arguments);

    let thisOrgFn=OrgArgs[0];
    let param=OrgArgs.slice(1);
    
    thisOrgFn.fun =OrgFn;
    thisOrgFn.fun(...param)
    delete thisOrgFn.fun
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

obj.fun1.myCall(o2,"sahas","wolfie","jasbir")