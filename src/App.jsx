import { useState } from "react";
import quotesArr from "../util/quotesArr";
import "./App.css";

function App() {
  const [quote, setQuote] = useState(getRandomNum(quotesArr.length - 1));

  const newQuoteBtn = () => {
    setTimeout(() => {
      let temp = getRandomNum(getRandomNum(quotesArr.length - 1));
      while (temp === quote) {
        getRandomNum(getRandomNum(quotesArr.length - 1));
      }
      setQuote(temp);
    }, 200);
  };

  return (
    <>
      <button onClick={newQuoteBtn}> New Quote </button>
      <h2>{`"${quotesArr[quote].quote}"`}</h2>
      <h3 className="name">{`- ${quotesArr[quote].name}`}</h3>
    </>
  );
}

function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}

export default App;
