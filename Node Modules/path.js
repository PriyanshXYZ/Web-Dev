const path = require('path')

let ext =path.extname('C:\\Users\\priya\\Documents\\javascript\\Node Modules\\f1.txt')
console.log('Extension of the file ',ext)
//extname-> Return the extension of the path of the file
let basename= path.basename('C:\\Users\\priya\\Documents\\javascript\\Node Modules\\f1.txt')
console.log('basename of the file ',basename)
//basename-> Return the actual name of the file or folder in its path

console.log(__dirname)//gets you the path of the directory you are in
console.log(__filename)//gets you path of file you are in