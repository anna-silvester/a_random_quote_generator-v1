/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array  Create an array of 7 quote objects and add them to the quotes array.  Citation and year are optional
***/

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
  "citation": "Boston Herald",
  "year": "1904"
},
{
  "quote": "If my life is going to mean anything, I have to live it myself.",
  "source": "Rick Riordan",
  "citation": "The Lightning Thief",
  "year": '2005'
}
]

//console.log(quotes);

// Save the number of quotes in the quotes array.  This value will remain unchanged while the app is running.
const numQuotes = quotes.length;

/***
 * `getRandomQuote` function
 *  Calculates a random number between 0 and array length - 1 and returns the quotes array element at that index.
***/

function getRandomQuote() {
   let quoteNumber = Math.floor( Math.random() * numQuotes ) ;
      return quotes[quoteNumber];
   // or is this better quotes[getRandomNumber(numQuotes)];
}

//console.log(getRandomQuote());


/***
 * `printQuote` function.  Calls the getRandomeQuote function to get a random quote object. 
 * Constructs a HTML string based on the quote objects attributes and assigns it to quote-box class.
 * This function has no return value specified.
***/

function printQuote() {
  let quote = getRandomQuote();

  // construct html string for quote and source.  quote and source are mandatory attributes.
  let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  
  // add citation and year to the html variable only if they are populated.
  if (typeof(quote.citation) !== "undefined") {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (typeof(quote.year) !== "undefined") {
    html += `<span class="year">${quote.year}</span>`;
  }
  // add final closing </p> tag.
  html += `</p>` ;

  // update the quote box with the new quote.
  document.getElementById('quote-box').innerHTML = html; 

  
}

/***
 * click event listener for the print quote button. Calls printQuote when the load-quote button is clicked.
 ***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

