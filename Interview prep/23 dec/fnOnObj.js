let obj={
    fun1 : function(){
        console.log("I am named "+this.fullName+" my age is "+this.age)
    },
    fun2 : function(){
        console.log("I am named "+obj.fullName+" my age is "+obj.age)
    },
    fun3 : function(){
        console.log("I am named "+fullName+" my age is "+age)
    },
    fullName :"Priyansh Ragit",
    age : 20

}
obj.fun1()
obj.fun2()
obj.fun3()