import{ React, useState } from 'react';
import styles from "./quote.module.css";
import { spanishPoems } from './PoemasLocos.js';
import { FaTwitterSquare } from "react-icons/fa";

const Quote = () => {
  const numerodePoemas = spanishPoems.length
  const numeroAleatorio = Math.floor(Math.random() * numerodePoemas);

  const [SpanishPoems, setSpanishPoems] = useState(spanishPoems[numeroAleatorio].poem)
  const [Author, setAuthor] = useState(spanishPoems[numeroAleatorio].author)

  const handlePoems = () => {
    const numerodePoemas = spanishPoems.length
    const numeroAleatorio = Math.floor(Math.random() * numerodePoemas);
    setSpanishPoems(spanishPoems[numeroAleatorio].poem);
    setAuthor(spanishPoems[numeroAleatorio].author);
  }
  return (
    <div id="quote-box" className={styles['quote-box']} >
      <h1 id="text" >{SpanishPoems}</h1>
      <p id="author">{Author}</p>
      <a id="tweet-quote" className={styles.tweet} href="#" target="_blank" ><FaTwitterSquare className={styles.icontweet} /></a>
      <button id="new-quote" className={styles.button} onClick={handlePoems} >New poem</button>
    </div>
  )
}

export default Quote