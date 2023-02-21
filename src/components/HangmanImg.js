import React from 'react';
import {useState} from 'react';
import case1Img from '../media/images/state1.GIF'
import case2Img from '../media/images/state2.GIF'
import case3Img from '../media/images/state3.GIF'
import case4Img from '../media/images/state4.GIF'
import case5Img from '../media/images/state5.GIF'
import case6Img from '../media/images/state6.GIF'
import case7Img from '../media/images/state7.GIF'
import case8Img from '../media/images/state8.GIF'
import case9Img from '../media/images/state9.GIF'
import case10Img from '../media/images/state10.GIF'
import case11Img from '../media/images/state11.GIF'

//logic for hangman images. When guessCounter increments it triggers the next case. 
//This component is called in Hangman.js instead of App.js due to scope.
const HangmanImg = ({guessCounter}) => {


    //this must be connected to state for user guesses
    switch(guessCounter) {
        case 0:
            return (
                <div>
                    <h2>Incorrect Guesses: 0</h2> 
                    <img src={case1Img} /> 
                </div>
            )

        case 1:
            return (
                <div>
                    <h2>Incorrect Guesses: 1</h2> 
                    <img src={case2Img} /> 
                </div>
            )
        
        case 2:
            return (
                <div>
                    <h2>Incorrect Guesses: 2</h2> 
                    <img src={case3Img} /> 
                </div>
            )
        
        case 3:
            return (
                <div>
                    <h2>Incorrect Guesses: 3</h2> 
                    <img src={case4Img} /> 
                </div>
            )

        case 4:
            return (
                <div>
                    <h2>Incorrect Guesses: 4</h2> 
                    <img src={case5Img} /> 
                </div>
            )

        case 5:
            return (
                <div>
                    <h2>Incorrect Guesses: 5</h2> 
                    <img src={case6Img} /> 
                </div>
            )
        
        case 6:
            return (
                <div>
                    <h2>Incorrect Guesses: 6</h2> 
                    <img src={case7Img} /> 
                </div>
            )
        
        case 7:
            return (
                <div>
                    <h2>Incorrect Guesses: 7</h2> 
                    <img src={case8Img} /> 
                </div>
            )
        
        case 8:
            return (
                <div>
                    <h2>Incorrect Guesses: 8</h2> 
                    <img src={case9Img} /> 
                </div>
            )
        
        case 9:
            return (
                <div>
                    <h2>Incorrect Guesses: 9</h2> 
                    <img src={case10Img} /> 
                </div>
            )
        
        default:
            return (
                // remove alphabet buttons 
                <div>
                    <h2>Game Over</h2> 
                    <img src={case11Img} /> 
                    <h3>Press Restart to Try Again</h3>
                </div>
            )

    }
    
}

export default HangmanImg;