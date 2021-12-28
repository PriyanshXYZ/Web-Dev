function person(name,age){
    this.name = "rahul";
    this.age = 22;
    this.sayHi=function(f1){
    console.log("name is "+name+" and age is "+age+" says hi to "+f1);
}
}
let p1=new person("Priyansh Ragit",20)//this is constructor invocation
p1.sayHi("wolfie")

