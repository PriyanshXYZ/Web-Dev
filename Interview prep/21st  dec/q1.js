// Description:
// Find output of the following:

function f() {
  console.log(arguments);
}

function f(a, b) {
  return a + b;
}

console.log(f(2, 3, 4, 5));

function f(x, y, z, t) {
    return x + y + z + t;
}

console.log(f(2, 3, 4, 5));
//js ignore previous all same name fn and allocates memory to  recent one

// Q2


function globalFunction(x) {
    return function outerFunction(y) {
      return function innerFunction(z) {
        return x + y + z;
      };
    };
  }