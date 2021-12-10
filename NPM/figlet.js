var figlet = require('figlet');

figlet('Hello World!!', function(err, data) {
    if (err) {
        console.log('Something went wrong...');
        console.dir(err);
        return;
    }
    console.log(data)
});

//how to Install a package
// go to the folder you want to install the package in at the Terminal
// and Type ->npm install <packagename>
//package will be downloaded