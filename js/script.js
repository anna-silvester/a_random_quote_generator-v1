/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Anna Silvester Nov 2021

Displays random quotes on screen.  A new quote is chosen at random when the "Show another quote" button is clicked and displayed with a 
random background colour. If the same quote is displayed on consecutive clicks, the background colour will at least be different.

******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array  Create an array of quote objects and add them to the quotes array.  Citation, year and link are optional
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
  "year": '1865',
  "link": 'https://www.amazon.com/Carroll-yesterday-different-Adventures-Wonderland/dp/B01IG06L7G'
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
  "year": '2005',
  "link": 'https://www.penguin.com.au/books/percy-jackson-and-the-lightning-thief-book-1-9780141346809'
},
{
  "quote": "And, when you want something, all the universe conspires in helping you to achieve it.",
  "source": "Paulo Coelho",
  "citation": "The Alchemist",
  "link": 'https://www.amazon.com.au/Alchemist-Paulo-Coelho-ebook/dp/B00U6SFUSS'
},
{
  "quote": "What you get by achieving your goals is not as important as what you become by achieving your goals.",
  "source": "Henry David Thoreau",
  },
{
  "quote": "Things are beautiful if you love them.",
  "source": "Jean Anouilh"
  }
]

//console.log(quotes);

// Save the number of quotes in the quotes array into the variable numQuotes.
const numQuotes = quotes.length;

/***
 * `getRandomQuote` function
 *  Calculates a random number between 0 and array length - 1 and returns the quotes array element at that index.
***/
function getRandomQuote() {
   let quoteNumber = Math.floor( Math.random() * numQuotes ) ;
      return quotes[quoteNumber];
}

 /*** 
  * Added for calculating random colours.
  * Given lower and upper integer values returns a random number between those values
  * Checks parameters supplied are numbers.
 **/
function getRandomColor(lower,upper) {
  let colorValue = 0;
  if (typeof(lower) === 'number' && typeof(upper) === 'number') {
     colorValue = Math.floor( Math.random() * upper + lower ) ;
  }
    return colorValue;
}

/***
 * `printQuote` function.  Calls the getRandomeQuote function to get a random quote object. 
 * Constructs a HTML string based on the quote objects attributes and assigns it to quote-box class.
 * This function has no return value specified.
***/
function printQuote() {
  let quote = getRandomQuote();

  // Construct html string for quote and source.  quote and source are mandatory quote attributes.
  let html = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;
  
  // add citation and year to the html variable only if they are populated.
  if (typeof(quote.citation) !== "undefined") {
    html += `<span class="citation">${quote.citation}</span>`;
  }
  if (typeof(quote.year) !== "undefined") {
    html += `<span class="year">${quote.year}</span>`;
  }
    // add link to the html variable only if populated. Hyperlink colour is changed from default to white.
  if (typeof(quote.link) !== "undefined") {
    html += `<span class="link"><a href="${quote.link}" style="color:white">Buy the Book</a></span>`;
  }
    // add final closing </p> tag.
  html += `</p>` ;
    
  // update the quote box with the new quote.
  document.getElementById('quote-box').innerHTML = html; 

  // assign a random background colour on each click.  
  // Keeping the colour values not too dark not too light.
  document.body.style.backgroundColor=`rgb(${getRandomColor(50,150)},${getRandomColor(50,150)},${getRandomColor(50,150)})`;
 }

/***
 * click event listener for the print quote button. Calls printQuote when the load-quote button is clicked.
 ***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);

// Refreshes the page every 10 seconds with a new quote.
setInterval(printQuote,10000);
