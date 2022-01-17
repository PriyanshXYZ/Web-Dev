# TODAYS TOPICS ARE 

- **Functions wrt global variables**
    ```javascript
    let sum = 0;

    function addSum(num) {
    sum = sum + num;
    }

    addSum(3);//sum will be 3.
    ```
    - `addSum` is a function without a return statement. The function will change the global sum variable but  the **returned value of the function is undefined**.

- ***Functions wrt return values***
    - **NO RETURN VALUE**
    ```javascript
    // case 1: if function doesnt return anything
    //{
    //function defination
    function sayHi(name) {
        console.log("Hello",name);
    }

    //function invocation => this line actually runs the  function defination
    sayHi("Priyansh")//=> hello priyansh
    
    //if we called the function =>this will print what is the parameter 
    console.log(sayHi) //=>[Function : sayHi]

    let ret = sayHi("Priyansh")
    console.log(ret) // =>undefined
    
    sayHi() // o/p => hello undefined
    ```
    - **WITH RETURN VALUES**
    ```javascript
    //case 2: if function returns something
    function sayHello(name) {
        console.log("Hello",name)
        return "this is what function has returned"
    }

    let retVal=sayHello("Priyansh")//o/p=> hello Priyans
    // retVal will have value that is returned from the function.
    console.log(retVal)
    //o/p=>"this is what function has returned"
    sayHello()
    //o/p=>hello undefined
    ```
- Types of functions
    - 1.function defination
    ```javascript
    function fn() {
         console.log("I am function definition");
     }
     fn(); 
    ```
    - 2.function expression
    ```javascript
    let secondName =function original(){
     console.log("I am function expression");    
     }
    secondName()//this will invoke original function
    ```
    - 3.IIFE immediately invoked function expression
    ```javascript
    console.log("before execution"); //here semicolon is imp as js interprets iife and console.log both as function and due to this we get error
    (function drawIt() {
    console.log("I am immidietly invoked function expression")
    })
    (); 
    console.log("after execution")
    ```
    - 4.anonymous function 
        - ananymous function expressiom
        ```javascript
        let ananymous = function(){
        console.log("I am ananymous function expression")
         }
        console.log(ananymous);
        ```
        - anonymous IIFE
        ```javascript
        (function() {
         console.log("I am ananymous immidietly invoked function expression")
         })()
        ```

- there is no function overloading in js.function is assigned to **most recent declared function**.
```javascript
//functions are created in heap and thier address is stored in stack
//there is no function overloading in js
iamReal()
function iamReal(){
    console.log("i am real")
}

function iamReal(){
    console.log("that wasnt real .i am real")
}

iamReal() //o/p=>that wasnt real .i am real
//function is assigned to most recent declared function.
```
- **ANALOGY TO KNOW IF A DATATYPE/VARIABLE IS PASS BY VALUE OR REFERENCE** 
    - **IF A VARIABLE  HAS FIXED SIZE THEN IT IS PASS BY VALUE (int,char)**
    - **IF A VARIABLE HAS UNSPECIFIED SIZE THEN IT IS PASS BY REFERENCE(array,objects)**
    - _this can be remembered as if we someone ask for pen we give them the pen(i.e value) but if someone asks for our home we give them our home's address rather than giving home (which is stupid)_