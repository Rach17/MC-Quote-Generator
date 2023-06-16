function getRandomInteger(min, max) {
    // Calculate the range of the random number
    const range = max - min + 1;
    
    // Generate a random number between 0 and 1, inclusive of 0 but not 1
    const random = Math.random();
    
    // Scale the random number to the desired range and round it down to an integer
    const randomNumber = Math.floor(random * range);
    
    // Add the minimum value to shift the range
    const result = min + randomNumber;
    
    return result;
}
  

// Define an array of quotes
const quotes = [
    {
      content: "Quote 1",
      author: "Author 1"
    },
    {
      content: "Quote 2",
      author: "Author 2"
    },
    {
      content: "Quote 3",
      author: "Author 3"
    },
    // Add more quotes here...
  ];
  
  const quoteContainer = document.getElementById("quote");
  const generateBtn = document.getElementById("generateBtn");
  const favoritBtn = document.getElementById("favoritBtn");
  const favoriteQuotesList = document.getElementById("favoriteQuotes");
  
   let currentQuoteIndex = -1; // Start with no quote displayed
  
generateBtn.addEventListener("click", generateQuote);

function generateQuote() {
    currentQuoteIndex = getRandomInteger(0,quotes.length-1);
    //Get the current quote object
    const currentQuote = quotes[currentQuoteIndex];
  
    // Generate the quote content string
    const quoteContent = `"${currentQuote.content}" - ${currentQuote.author}`;
  
    // Display the quote on the page
    quoteContainer.children[0].textContent = `"${currentQuote.content}"`;
    quoteContainer.children[1].textContent = currentQuote.author;

    let i;
    for(i = 0; i < favoriteQuotesList.children.length; i++) {
        if(quoteContent == favoriteQuotesList.children[i].textContent) break;
    }
    if (i == favoriteQuotesList.children.length) favoritBtn.classList.remove("favorite");
    else  favoritBtn.classList.add("favorite");
}

generateQuote();
  
favoritBtn.addEventListener("click", toggleFavorite);

function toggleFavorite() {
    if (favoritBtn.classList.contains("favorite")) {
      // Remove quote from favorites
      removeQuoteFromFavorites(currentQuoteIndex);
      favoritBtn.classList.remove("favorite");
     } else {
       // Add quote to favorites
       addQuoteToFavorites(currentQuoteIndex);
       favoritBtn.classList.add("favorite");
    }
  }

function addQuoteToFavorites(quoteIndex) {
    const favoriteQuote = quotes[quoteIndex];
    const li = document.createElement("li");
    li.textContent = `"${favoriteQuote.content}" - ${favoriteQuote.author}`;
    favoriteQuotesList.appendChild(li);
}
  
  function removeQuoteFromFavorites(quoteIndex) {
    const favoriteQuote = quotes[quoteIndex];
    const quotesInList = favoriteQuotesList.getElementsByTagName("li");
  
    // Iterate over the list of favorite quotes and remove the matching one
    for (let i = 0; i < quotesInList.length; i++) {
      const quote = quotesInList[i];
  
      if (quote.textContent === `"${favoriteQuote.content}" - ${favoriteQuote.author}`) {
        quote.remove();
        break; // Stop iterating once the quote is found and removed
      }
    }
  }
