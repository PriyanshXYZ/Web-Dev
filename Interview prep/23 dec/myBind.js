Function.prototype.myBind= function (){
    let orgFunc=this;
    let args =Array.from(arguments);

    boundFunction =function(){
        let thisOrgFn =args[0];
        let thisOrgFnArgs =args.slice(1);
        let thisOrgFnParam=Array.from(arguments);
        thisOrgFnArgs =thisOrgFnArgs.concat(thisOrgFnParam);
        orgFunc.apply(thisOrgFn,thisOrgFnArgs);
    }
   return boundFunction;
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

let boundFn=obj.fun1.myBind(o2,"navdeep","vikas","sahas");
boundFn("Priyansh")


