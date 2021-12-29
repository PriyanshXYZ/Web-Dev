//imp from interview point of view
a=100;
b=200;
c=300;
function fun(){
    console.log(this.a+" "+this.b+" "+this.c)
}

let obj={
    a:10,
    b:20,
    c:30,
    fun1:function(){
        console.log(this.a+" "+this.b+" "+this.c)
    },
    fun2:fun,
    fun3: () =>{
        console.log(this.a+" "+this.b+" "+this.c)//dont use this in arrow function
    }
}
let o2={
    a:1000,
    b:2000,
    c:3000
};
obj.fun1();
fun();
obj.fun2();
obj.fun3();

obj.fun1.call(o2)
fun.call(o2)
obj.fun2.call(o2)
obj.fun3.call(o2)//arrow function shows different ambigious behavior in node and browser. 