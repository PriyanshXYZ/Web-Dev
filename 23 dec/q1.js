//part 1
fun()

var fun =function (){
    gun()
}

var gun= function () {
    console.log("i am inside gun")
}

//this will give error as when fun is called function fun is not allocated(as this fun is var variable)
//part 2
// var fun =function (){
//     gun()
// }

// fun()

// var gun= function () {
//     console.log("i am inside gun")
// }
//this will give error as when fun is called function gun is not allocated(as var is declared after code execution)


//part 3
// var fun =function (){
//     gun()
// }

// var gun= function () {
//     console.log("i am inside gun")
// }
// fun()


//part 4
// fun();
// function fun() {
//     gun()
// }

// function gun() {
//     console.log("i am inside gun")
// }

