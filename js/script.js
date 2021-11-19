/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array  Create an array of 6 quote objects and add them to the quotes array.
***/

// create quotes array and populate with quotes.  Citation and year are optional
let quotes = [   
 {
  "quote": "Without music, life would be a mistake.",
  "source": "Friedrich Nietzsche",
  "citation": "Twilight of the Idols",
  "year": '1889'
},
{
  "quote": "Be yourself; everyone else is already taken.",
  "source": "Oscar Wilde"
 },
 {
  "quote": "There are only two ways to live your life. One is as though nothing is a miracle. The other is as though everything is a miracle.",
  "source": "Albert Einstein"
  },
 {
  "quote": "It’s no use going back to yesterday, because I was a different person then.",
  "source": "Lewis Carroll",
  "citation": "Alice's Adventures in Wonderland",
  "year": '1865'
},
{
  "quote": "Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has.",
  "source": "Margaret Mead",
  "year": '1978'
 },
{
  "quote": "Whatever you are, be a good one.",
  "source": "Abraham Lincoln",
  "citation": "1904",
  "year": 'Boston Herald'
},
{
  "quote": "If my life is going to mean anything, I have to live it myself.",
  "source": " Rick Riordan",
  "citation": "The Lightning Thief",
  "year": '2005'
}
]

console.log(quotes);

/***
 * `getRandomQuote` function
***/



/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);