import React from 'react';
import '../App.css';

// restart + help buttons component
const Buttons = () => {
    return (
        <div>

            <button className='buttons' onClick={() => window.location.reload()}>restart</button>
            <button className='buttons' onClick={() => alert
            ("------------------Game Instructions-----------------\n\nObjectives: Guess the word correctly by guessing which letters are in the word!\n\nWin Condition: Guess all the letters in the word correctly whist making less than 10 errors!\n\nLose Condition: Make more than 10 errors before guessing the word correctly!")
            }
            >
                help
            </button>
        </div>
    )
}

export default Buttons;

