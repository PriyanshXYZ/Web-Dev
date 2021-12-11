const cheerio = require('cheerio')
const request = require('request')

console.log("before")

request("https://www.worldometers.info/coronavirus/", cb)

function cb(error, response,html) {
    if(error){
        console.error(error)
    }else{
        handleHtml(html)
    }
    function handleHtml(html) {
        //in selector tool we are getting the whole html codePoint
        let selectionTool = cheerio.load(html)

        let contentArr = selectionTool("#maincounter-wrap span")

        //below code is to illustrate that data is always stored in array

        // for(let i=0;i<contentArr.length;i++){
        //     let data = selectionTool(contentArr[i]).text()
        //     console.log('data' , data)
        // }


        let totalCases = selectionTool(contentArr[0]).text()//to get total no of cases from the html code
        let totalDeaths = selectionTool(contentArr[1]).text()//to get total no. of deaths 
        let totalRecovered = selectionTool(contentArr[2]).text()//to get total no of recovered

        console.log('Total Cases',totalCases)
        console.log('Total Deaths',totalDeaths)
        console.log('Total Recovered',totalRecovered)
    }
    
}
        console.log('after')