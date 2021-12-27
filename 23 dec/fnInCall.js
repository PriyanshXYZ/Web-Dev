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
// obj.fun1("sahas","wolfie")

let o2={
    fullName : "Sumit",
    age : 34
}

 obj.fun1.call(o2,"navdeep","vikas");

//call is a function it is available for all functions.it can be used to call the function
//the use of call is ,if you want to override the default this

// obj.fun1.apply(o2,["navdeep","vikas"]);

// let boundFunction = obj.fun1.bind(o2,"navdeep","vikas","sahas");
// boundFunction("Priyansh")
