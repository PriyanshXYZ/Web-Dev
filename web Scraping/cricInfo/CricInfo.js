// you are given a website link and you have to find
//1) Man of the match
//2) highest wicket taker
//3) 
let request = require('request');
let jsdom=require('jsdom');
let{JSDOM}=jsdom
let fs=require('fs');
const { data } = require('cheerio/lib/api/attributes');
request("https://www.espncricinfo.com/series/afghanistan-in-bangladesh-2021-22-1299826/bangladesh-vs-afghanistan-1st-t20i-1299832/full-scorecard",cb);
function cb(err,htmlResponse,html){
    if(err) console.log(err);
    else if(htmlResponse.statusCode == 404) console.log("page not found");
    else{
        // console.log(html);
        parseHtml(html);
    }
}
function parseHtml(html){
    let dom=new JSDOM(html);
    let document=dom.window.document;
    mom(document);
    Winnerteam(document);
    highestWicketTaker(document);
}
function mom(document){
    let manOfMatch=document.querySelector(".playerofthematch-name");

    console.log(manOfMatch.textContent);
}
function Winnerteam(document){
    let winner=document.querySelector(".match-info.match-info-MATCH.match-info-MATCH-half-width .status-text");
    console.log(winner.textContent);
    return winner.textContent;
}
function highestWicketTaker(document){
    let teamtable=document.querySelectorAll(".Collapsible");
    for(let i=0;i<teamtable.length;i++){
        fs.writeFileSync(`innings ${i}.html`,teamtable[i]);
    }
}