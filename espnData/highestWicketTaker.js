const request = require('request')
const cheerio = require('cheerio')

const url="https://www.espncricinfo.com/series/ipl-2020-21-1210595/chennai-super-kings-vs-kings-xi-punjab-53rd-match-1216506/full-scorecard"
console.log('before')
request(url,cb)

function cb(error,response,html) {
    if (error){
    console.error(error)
    } else{
    extractHTML(html)
    }
}

function extractHTML(html){
    let $=cheerio.load(html) //get full html from of site

    let teamArr =$('.match-info.match-info-MATCH.match-info-MATCH .team')
    
    
    // let team1=$(teamArr[0]).text()
    // console.log("Team 1 is ",team1)
    // let team2=$(teamArr[1]).text()
    // console.log("Team 2 is ",team2)

    let wTeamName

    for (let i = 0; i < teamArr.length; i++){
        let hasClass = $(teamArr[i]).hasClass('team-gray')
        if(hasClass == false){
            let teamNameElem = $(teamArr[i]).find('.name')
            wTeamName =teamNameElem.text().trim()
        }
    }
    console.log(`Winner team is ${wTeamName}`)

    let inningsArr =$('.card.content-block.match-scorecard-table>.Collapsible')
    let htmlStr = ''

    for (let i = 0; i < inningsArr.length; i++){
        let cHtml =$(inningsArr[i]).html() //to get the whole html code for innings
        htmlStr += cHtml

        let teamNameElem =$(inningsArr[i]).find('.header-title.label')

        let teamName = teamNameElem.text().split('INNINGS')[0].trim() //split function is used to break the text into 2 parts with comma seperation ....[0] tells first part of the split

        console.log(teamName)

        let highestWicketTakerName =''

        let highestWicketTaker =0;

        if (wTeamName == teamName){
            let tableElem = $(inningsArr[i]).find('.table.bowler')
            let allBowlers = tableElem.find('tr')

            for (let j=0; j<allBowlers.length ; j++){
                let allColPlayers = $(allBowlers[j]).find('td')
                let playerName = $(allColPlayers[0]).text()
                let wickets =$(allColPlayers[4]).text()
                if(wickets >=highestWicketTaker){
                    highestWicketTaker = wickets
                    highestWicketTakerName = playerName
                }
            }
            console.log(`Highest Wicket Taker is ${highestWicketTakerName} with ${highestWicketTaker} wickets`)
        }
    }
    // console.log(htmlStr)
}
console.log('after')