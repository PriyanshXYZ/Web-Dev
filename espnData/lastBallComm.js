const request = require("request")
const cheerio = require("cheerio")

request("https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/ball-by-ball-commentary",cb)

function cb(error, response,html) {
    if(error){
        console.error(error)
    }else{
        handleHtml(html)
    }
}
function handleHtml(html){
    let $=cheerio.load(html)

    let elementArr =$(".d-flex.match-comment-padder.align-items-center .match-comment-long-text")

    let lbc=$(elementArr[0]).text();
    console.log(`last ball Commentary -> 
                ${lbc}`)
}