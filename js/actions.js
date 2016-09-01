require('isomorphic-fetch');

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

var FETCH_HIGHSCORE = 'FETCH_HIGHSCORE';
var fetchHighScore = function() {
  // return {
  //   type: FETCH_HIGHSCORE,
  //   highScore: highScore
  // }
  return function() {
      var url = 'http://localhost:8080/getScore/';
      console.log('fetch running' )
      return fetch(url).then(function(res) {
        console.log('fetch done', res)
          if (res.status < 200 || res.status >= 300) {
              var error = new Error(res.statusText)
              error.res = res
              throw error;
          }
          return {
            type: FETCH_HIGHSCORE,
            //highScore: res.score}
            highScore: 50}
      })
      // .then(function(res) {
      //     return res.json();
      // })
  }

}

var SEND_SCORE = 'SEND_SCORE';
var sendScore = function(score) {
  return {
    type: SEND_SCORE,
    highScore: score

  }
}
/** Exports actions */
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.START_NEWGAME = START_NEWGAME;
exports.startNewGame = startNewGame;
exports.FETCH_HIGHSCORE = FETCH_HIGHSCORE;
exports.fetchHighScore = fetchHighScore;
exports.SEND_SCORE = SEND_SCORE;
exports.sendScore = sendScore;
