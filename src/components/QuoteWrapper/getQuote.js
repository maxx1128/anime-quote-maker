import axios from "axios";
import randomCustomQuote from "../../data/customQuotes";

export function getQuote(update, random, set) {
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
    update().quote(quote);
    update().author(author);

    if (set === 'fontSize') { random().fontSize(quote); }
  });
};
