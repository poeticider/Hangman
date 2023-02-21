import React from 'react';
import {useState} from 'react';
import HangmanImg from './HangmanImg.js';

//main logic for hangman game found here


//hangman tutorial guide used for basic logic:
//https://hackernoon.com/tutorial-building-a-hangman-game-with-react-hooks-c22c354a
function Hangman({word})  {

    const alphabets = ["A", "B", "C", "D", "E", "F", "G",
        "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R",
        "S", "T", "U", "V", "W", "X", "Y", "Z"];

     //state and setState to modify _ letters that have not been guessed   
    const [correctGuesses, setCorrectGuesses] = useState([])  
    const [guessCounter, setGuessCounter] = useState(0)    
    
        //word is split into an arr. Ternary checks if maskedWord + words letters
        //are the same.
        const maskedWord = word.split('').map(letter => 
        correctGuesses.includes(letter) ? letter : "_").join(" ");
    

        return  (
            <div>
                <p>{maskedWord}</p>
                
                    
              
                {alphabets
                //creates buttons for every letter in the alphabet
                .map((alphabet, index) => 
                <button key={index} onClick={() => {
                    if (word.includes(alphabet)) {
                        setCorrectGuesses([...correctGuesses, alphabet])
                       
                    } else {
                        //counter incrememnts on incorrect guess which changes the hangman image
                        setGuessCounter(counter => counter + 1)
                    }

                }}>{alphabet}</button>)}



                {/* If there are no more _ spaces, 'You won' is displayed */}
                {/* {!maskedWord.includes("_") && <p>You won!</p>} */}

                { !maskedWord.includes("_") ? (guessCounter < 10 ? <p>You won!</p> : null) : null}

                {/* had issues putting this component in app.js due to scope so it had to be moved here */}
                <HangmanImg guessCounter={guessCounter} />

            </div>
        )

}



export default Hangman;