
/**
* MAKE_GUESS Action
* @namespace MAKE_GUESS
* A user action that inputs a guess for the game
* @param {guess} The user input for the guess
* @returns {type} The type of action that gets passed to the reducer
* @returns {userNum} The user input that gets passed through the reducer
*/
var MAKE_GUESS = 'MAKE_GUESS';
var makeGuess = function(guess) {
  return {
    type: MAKE_GUESS,
    userNum: guess
  }
}

/**
* START_NEWGAME Action
* @namespace START_NEWGAME
* A user action that begins a new game (returns game to initial state)
* @returns {type} The type of action that gets passed to the reducer
*/
var START_NEWGAME = 'START_NEWGAME';
var startNewGame = function() {
  return {
    type: START_NEWGAME
  }
}

/** Exports actions */
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.START_NEWGAME = START_NEWGAME;
exports.startNewGame = startNewGame;
