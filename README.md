HANGMAN

------------------Game Instructions-----------------

Objectives: Guess the word correctly by guessing which letters are in the word!

Win Condition: Guess all the letters in the word correctly whist making less than 10 errors!

Lose Condition: Make more than 10 errors before guessing the word correctly!

-------------Detailled Instructions----------------

At game start, the word you have to guess will be displayed at the top of the page as a series of '_ _ _'.
Each '_' represents one letter that must be guessed. To guess a letter, press the corrosponding button (ie if you guess 'A' is in the word, you must press the 'A' button). 

If your guess-letter is within the word, your guess is deemed correct and ALL instances of this letter will be revealed. However, if your guess-letter is not within the word, then you made an error! This means more of the hangman will be drawn. Make 10 such errors and you lose the game, as the hangman is completed!






----------------How to install locally--------------------

Go to the green "Code" button and select "download Zip". Alternatively, use the git clone method which is also available via the green "Code" button.

Once you've unzipped the folder, move it to a convenient location on your local machine.

Open your terminal and navigate to the game folder (the one containing the package.json file).

Run npm install. This will replace the node packages that are needed for the game to run.

Once the folders are downloaded, run npm start from the folder directory.

The app will now open in a new browser window, or you can navigate to it at localhost:3000/.