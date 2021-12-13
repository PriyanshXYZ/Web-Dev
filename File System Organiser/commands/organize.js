const fs = require('fs')
const path = require('path')
let types = {
    media: ["mp4", "mkv","mp3"],
    archives: ['zip', '7z', 'rar', 'tar', 'gz', 'ar', 'iso', "xz"],
    documents: ['docx', 'doc', 'pdf', 'xlsx', 'xls', 'odt', 'ods', 'odp', 'odg', 'odf', 'txt', 'ps', 'tex'],
    app: ['exe', 'dmg', 'pkg', "deb"]
}

function organizeFn(dirpath){
    //1. input of directory path 
    let destPath;
    if(dirpath == undefined){
        console.log('PLEASE ENTER DIRECTORY PATH')
        return;
    }else{
        let doesExist = fs.existsSync(dirpath)
        //console.log(doesExist)
        if(doesExist ==true){
            //2.create a organised files directory
            destPath = path.join(dirpath,"organized_files");
            //dirPath ->C:\Users\priya\Documents\javascript\test folder\organized_files // i want to create the folder in this path
            if(fs.existsSync(destPath)==false){
                fs.mkdirSync(destPath);//this will create a directory if it does not exist.
            }else{
                console.log("The Folder Already Exists")
            }
        }else{
            console.log("Please enter a valid Path")
        } 
    }
    organizeHelper(dirpath,destPath)
}
//organise helper is used to catorize the files
function organizeHelper(src , dest){
    let childNames =fs.readdirSync(src) //get all the files and folders in that directory
    //console.log(childNames)

    for ( let i=0 ;i<childNames.length; i++){
        let childAddress =path.join(src ,childNames[i])// path is identified for the file
        let isFile =fs.lstatSync(childAddress).isFile()// we check here to identify files
        
        if (isFile == true) {
        let fileCategory = getCategory(childNames[i]);
        console.log(childNames[i] + "  belongs to  " + fileCategory);

        sendFiles(childAddress ,dest ,fileCategory)
    }
    }
}

function getCategory(name) {
    let ext = path.extname(name);// we will take out the extension of the files here
    //console.log(ext)
    ext = ext.slice(1);
    //console.log(ext)

    for (let type in types) {
    let cTypeArr = types[type];
    //console.log(cTypeArr)

    for (let i = 0; i < cTypeArr.length; i++) {
        if (ext == cTypeArr[i]) {// we will take out the extension of the files here
        return type;// we rerturned typs of the file
        }
    }
    }
    return "others"
}

function sendFiles(srcFilePath , dest ,fileCategory){
    let catPath = path.join(dest , fileCategory)
    //
    if(fs.existsSync(catPath)==false){
        fs.mkdirSync(catPath)
    }
    let filename = path.basename(srcFilePath)
    let destFilePath = path.join(catPath ,filename)
    fs.copyFileSync(srcFilePath, destFilePath)
    fs.unlinkSync(srcFilePath)

    console.log(filename + " copied to "+ fileCategory) 
}

module.exports ={
    organizeFnKey : organizeFn
}