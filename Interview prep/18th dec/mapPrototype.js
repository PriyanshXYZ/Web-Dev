Array.prototype.myMap = function(cb){
    let newArray = [];
    for (let i = 0; i < this.length; i++) {
        let ans = cb(this[i]);
        newArray.push(ans);
    }
    return newArray;
}
function squarer(x) {
    return x * x;
}
let arr = [5, 7, 19, 12, 13, 14];
console.log(arr.myMap(squarer))//previously we needed to pass arr in paramter of mymap function (refer mapPolyfill.js)so using Array.prototype we can use it in given form