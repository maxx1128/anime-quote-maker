import axios from "axios";
import randomCustomQuote from "../../data/customQuotes";

export function getQuote(quoteThis, set) {
  let quote, author;
  const randomQuote = randomCustomQuote();

  axios.get('https://api.quotable.io/random').then(response => {
      const useRandomQuote = Math.floor(Math.random() * 4) === 0;

      if (useRandomQuote) {
        quote = randomQuote.content;
        author = randomQuote.author;
      } else {
        quote = response.data.content;
        author = response.data.author;
      }
  }).catch(() => {
      quote = randomQuote.content;
      author = randomQuote.author;
  }).finally(() => {
      quoteThis.setState({
        quote: quote,
        author: author
      });

      if (set === 'fontSize') { quoteThis.random().fontSize(quote); }
  });
};
