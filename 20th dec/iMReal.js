//memory mapping done in copy of webdev

//functions are created in heap and thier address is stored in stack
//there is no function overloading in js
iamReal()
function iamReal(){
    console.log("i am real")
}

function iamReal(){
    console.log("that wasnt real .i am real")
}

iamReal()