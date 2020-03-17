/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotations = [
  {
   quote: "A fool thinks himself to be wise, but a wise man knows himself to be a fool.",
   source: "William Shakespeare",
   year: 2020 
  },
  {
   quote: "Self-pity is our worst enemy and if we yield to it, we can never do anything wise in this world.",
   source: "Helen Keller",
   year: 2000 
  },
  {
   quote: "Wise men speak because they have something to say; Fools because they have to say something.",
   source: "Plato",
   year: 200 
  },
  {
   quote: "The wise man does at once what the fool does finally.",
   source: "Niccolo Machiavelli",
   year: 210 
  }
]


/***
 * `getRandomQuote` function
***/
let list = 0;
var quote;
let quoted = [];
let newList=[];
function randomNumber(quote){
  return quote[Math.floor(Math.random()*quote.length)];
}

function getRandomQuote(quote){
  let randomList = [];
  for (let i = 0; i < quote.length; i ++){
    list = `<p>"${quote[i].quote}"</p> <p><em>${quote[i].source}</em> ${quote[i].year}</p>`
    randomList.push(list);
  }return randomNumber(randomList);
}
getRandomQuote(quotations);


/***
 * `printQuote` function
***/
function printQuote(message){
  let outputToScreen = document.getElementById('quote-box');
  outputToScreen.innerHTML = message;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);