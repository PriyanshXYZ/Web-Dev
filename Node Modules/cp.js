//The child_process module provides the ability to spawn subprocesses in a manner that is similar, but not identical, to popen(3). This capability is primarily provided by the spawn function:

const cp =require('child_process')

// console.log('trying to open Calculator ')

// cp.execSync('calc')  //execute is the child process method used to execute files
// console.log('Calculator opened')

// console.log('Trying to open Vs Code')

// cp.execSync('code')

// console.log('Vs code Opened')

//cp.execSync('start firefox https://nados.pepcoding.com/feed')

let output = cp.execSync('node test.js')
console.log(''+output)