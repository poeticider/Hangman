import './App.css';
import Hangman from './components/Hangman.js'
import Buttons from './components/Buttons.js';
import Footer from './components/Footer.js';

function App() {
  //array of words for the hangman game
  let wordArr = ["AMAZING", "GOOD", "WONDERFUL", "TERRIBLE", "AWFUL", "FANTASTIC", "HORRENDOUS", "BAD"];

    //random word generator
    const word = wordArr[Math.floor(Math.random() * wordArr.length)];


  return (
    <div className="App">
        <Buttons />
        <h1>Hangman</h1>
        <Hangman word={word}/>
        <Footer />
        
    </div>
  );
}

export default App;
