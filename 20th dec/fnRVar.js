// fn definition
function fn(param) {
    console.log("I am function definition", param);
    // execute chota fn 
    param();
}
fn(chotaFn);

//+++**ANALOGY TO KNOW IF A DATATYPE/VARIABLE IS PASS BY VALUE OR REFERENCE 
//++** IF A VARIABLE  HAS FIXED SIZE THEN IT IS PASS BY VALUE (int,char)
//++** IF A VARIABLE HAS UNSECIFIED SIZE THEN IT IS PASS BY REFERENCE(array,objects)
//++** this can be remembered as if we someone ask for pen we give them the pen(i.e value)
//++** but if someone asks for our home we give them our home's address rather than giving home (which is stupid)






// // boolean->  direct value is passed 
// fn(true);
// address /reference is passed here.
// //string -> reference type 
// fn("Hello");

 // object
// let obj = { name: "Jasbir" };
// fn(obj);
// // array
// let arr = [10, 20, 30];
// fn(arr);
// functions are also variables -> functions are first citizens in js
function chotaFn() {
    console.log("Hello i am a chota fn");
}
// function can also be passed as an parameter/argument in a function 
// HOF 