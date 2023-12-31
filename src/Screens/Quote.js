import{ React, useState } from 'react';
import styles from "./quote.module.css";
import { spanishPoems } from './PoemasLocos.js';
import { FaTwitterSquare } from "react-icons/fa";

const Quote = ({ addMensaje }) => {

  const numerodePoemas = spanishPoems.length
  const numeroAleatorio = Math.floor(Math.random() * numerodePoemas);

  const [SpanishPoems, setSpanishPoems] = useState(spanishPoems[numeroAleatorio].poem)
  const [Author, setAuthor] = useState(spanishPoems[numeroAleatorio].author);
  const [BackColors, setBackColors] = useState(spanishPoems[numeroAleatorio].backcolor);
  const [Colors, setColors] = useState(spanishPoems[numeroAleatorio].color);

  const handlePoems = () => {
    const numerodePoemas = spanishPoems.length
    const numeroAleatorio = Math.floor(Math.random() * numerodePoemas);
    setSpanishPoems(spanishPoems[numeroAleatorio].poem);
    setAuthor(spanishPoems[numeroAleatorio].author);
    setBackColors(spanishPoems[numeroAleatorio].backcolor);
    setColors(spanishPoems[numeroAleatorio].color);
    addMensaje(spanishPoems[numeroAleatorio].backcolor);
  }

  return (
    <div id="quote-box" className={styles['quote-box']} >
      <h1 id="text" style={Colors} >{SpanishPoems}</h1>
      <p id="author" style={Colors} >{Author}</p>
      <a id="tweet-quote" style={Colors} className={styles.tweet} href="twitter.com/intent/tweet" target="_blank" ><FaTwitterSquare className={styles.icontweet} /></a>
      <button id="new-quote" className={styles.button} onClick={handlePoems} style={BackColors} >New poem</button>
    </div>
  )
}

export default Quote