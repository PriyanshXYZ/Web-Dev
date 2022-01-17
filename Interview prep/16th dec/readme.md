# TODAYS TOPICS ARE 

- **Array basic functions**
    ```javascript
    let array =[1,2,3,4,5,6,7]
    ```
 
    - `shift` => remove element at first
    - `pop` => remove element at last
    - `unshift` => add element at first
    - `push` => add element at last
    - `slice` => this creates a copy of array and does     not  make changes in the original array
        - first param is starting index which is included
        - second param is ending index which is excluded
    ```javascript
    let copyPartOfArray=array.slice(2,5)
    console.log(copyPartOfArray)//3,4,5
    console.log(array)//1,2,3,4,5,6,7
    ```
    - `splice` => original array elements are  deleted which are spliced.
        - first param is _starting index_ which is included
        - second param is _delete count_ from first param
    ```javascript
    let spliceArray =array.splice(2,3)

    console.log(spliceArray)//1,2,6,7
    console.log(array)//1,2,6,7
    ```
    - `includes` => returns true if array doesnt contain the element
    ```javascript
    let isPresent = array.includes(7)
    console.log(isPresent)
    ```
    - `indexOf` =>returns the index of the element
    ```javascript
    let idx = array.indexOf(7)
    console.log(idx)
    ```
- **Function as variables**
    - function can be declared as variables in js
    ```javascript
    let a=function(){
        //body
    }
    ```
- higher order functions
    - function which passed parameter as functions
    - eg. `map`,`filter`
    ```javascript
    function sayHi(name) {
    console.log("my name is: " + name);
    name();
    }
    function chotaFunction() {
    console.log("this is a function1");
    }
    sayHi(chotaFunction);//my name is [Function :chotaFunction]
    // i am chota function

- A question related to how to union 2 arrays.
    - [Question]()
