# FUNCTIONAL PROGRAMMING

- Functional programming is about:
    - Isolated functions - there is no dependence on the state of the   program, which includes global variables that are subject to change
    - Pure functions - the same input always gives the same output
    - Functions with limited side effects - any changes, or mutations, to the state of the program outside the function are carefully controlled
- `splice` operator changes the orignal content of the array 
    - **array.splice(start,deletecount,additems....)**
    - [splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
- `slice` operator on the other hand does not change the original array it returns a shallow copy of the array
    - **array.slice(start idx,end idx)**
    -[slice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
- In functional programming, ***Dont alter variable or object instead create new variable or objects***,
- ***A function, ideally, should be a pure function***, meaning that it does not cause any side effects.
- ***Declare function parameters*** - any computation inside a function depends only on the arguments passed to the function, and not on any global object or variable.
- `map`method iterates over each item in an array and returns a new array containing the results of calling the callback function on each element. It does this without mutating the original array.
    -[map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
    - [Question](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-map-method-to-extract-data-from-an-array)
    ```javascript
    let ratings=watchList.map(({Title : title ,imdbRating : rating})=>({title,rating}));
    ```
- `filter` calls a function on each element of an array and returns a new array containing only the elements for which that function returns true.   
    - [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
    - it filters the array, based on the function passed to it.
    - Like `map`, it does this without needing to modify the original array.
- `concat` method as a way to combine arrays into a new one _without mutating the original arrays_.
    - On Compare concat to the push method. push adds an item to the end of the same array it is called on, which mutates that array.
    - [concat](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)
- `push` method adds one or more elements to the end of an array and returns the new length of the array.
    - it alters the original array.
    - [push](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- `reduce` method  executes a user-supplied “reducer” callback function on each element of the array,and return single value
    - [Question](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/functional-programming/use-the-reduce-method-to-analyze-data)
    ```javascript
        function getRating(watchList) {
    let filteredMovies=watchList.filter(m=>m['Director']=="Christopher Nolan").map(m=>parseFloat(m['imdbRating']));
    let averageRating=filteredMovies.reduce((s,r)=>s+r)/filteredMovies.length;
    //here reduce calculates the sum of all ratings of movie in single value
    return averageRating;
    }
    ```
- `split`
    - [split]()
- `join`
    - [join]()
- `replace` method is used to replace any character with desired character eg. "," with " ".
    ```javascript
    let text = "Visit Microsoft!";
    let result = text.replace("Microsoft", "W3Schools");
    ```
- `Regex`(used in split )
    - `/\W/` is used to match any non-word character.
    - `/\d/` is used to match any digit.
- `sort` changes the values of origianl array hence should not be used.
    - [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
    -JavaScript's default sorting method is by `string Unicode point value`, which may return unexpected results. Therefore, it is encouraged to provide a callback function to specify how to sort the array items.
    ```javascript
    //1.
    function ascendingOrder(arr) {
    return arr.sort(function(a, b) {
        return a - b;
    });
    }
    ascendingOrder([1, 5, 2, 3, 4]);//[1,2,3,4,5]
    //2.
    function reverseAlpha(arr) {
    return arr.sort(function(a, b) {
        return a === b ? 0 : a < b ? 1 : -1;
    });
    }
    reverseAlpha(['l', 'h', 'z', 'b', 's']);//['z', 's', 'l', 'h', 'b']

- `===` is a strict equality comparison operator in JavaScript, which returns false for the values which are not of a similar type. This operator performs type casting for equality.
    - If we compare 2 with “2” using ===, then it will return a false value

- `currying` in javascript can be understood by using the following example
    ```javascript
        //curried function
    function add(x) {
    return function(y){
        return function (z){
            return x+y+z;
            }
        }
    }
    add(10)(20)(30);

    //normal function
    function add(x,y,z){
        return x+y+z;
    }
    add(10,20,30)
    ```
    - [currying](https://javascript.info/currying-partials)





