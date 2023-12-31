import './App.css';
import Quote from "./Screens/Quote";
import { useState } from "react";

function App() {

  const [Colores, setColores] = useState({backgroundColor: 'rgb(52, 34, 36)'});

  const addMensaje = (backColor) => {
    setColores(backColor);
  }

  return (
    <div className="App" style={Colores} >
      <div className='container'  >
        <Quote addMensaje={addMensaje}/>
        <footer className="footer" >By Leonardo </footer>
      </div>
    </div>
  );
}

export default App;
