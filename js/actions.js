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

var SEND_SCORE = 'SEND_SCORE';
var sendScore = function(score) {
  return {
    type: SEND_SCORE,
    sendScore: score

  }
}

var FETCH_HIGHSCORE = 'FETCH_HIGHSCORE';
var fetchHighScore = function(score) {
  return {
    type: FETCH_HIGHSCORE,
    highScore: score
  }
}

var FETCH_SCORE = 'FETCH_SCORE';
var fetchScore = function() {
  // return {
  //   type: FETCH_HIGHSCORE,
  //   highScore: highScore
  // }
  return function(dispatch) {
      var url = 'http://localhost:8080/getScore/';
      console.log('fetch running' )
      return fetch(url).then(function(res) {
        console.log('fetch done', res)
          if (res.status < 200 || res.status >= 300) {
              var error = new Error(res.statusText)
              error.res = res
              throw error;
          } 
          return res.json();
          // return {
          //   type: FETCH_HIGHSCORE,
          //   //highScore: res.score}
          //   highScore: 50}
      })
      // .then(function(response) {
      //   console.log('json data' + response.json());
      //   return response.json();
      // })
      .then(function(data) {
        console.log('fetchHighScore promise worked');
        console.log(data);
        return dispatch(
            fetchHighScore(data.score)
          );
      })
      // .then(function(res) {
      //     return res.json();
      // })
  }

}

var SAVE_SCORE = 'SAVE_SCORE';
var saveGuesses = function() {
    return function(dispatch) {
        var url = 'http://localhost:8080/getScore';
        return fetch(url, {
            method: 'post',
            headers: {
                "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
            },
            body: {"score": 4}
    }).then(function(response) {
            if (response.status < 200 || response.status >= 300) {
                var error = new Error(response.statusText)
                error.response = response
                throw error;
            }
        return response.json();
    })
    .then(function(data) {
        //var score = data.body.score;

        return dispatch(
            sendScore(5)

        );
    })
    // .catch(function(error) {
    //     var error = "error";
    //     return dispatch(
    //         fetchFewestGuessesError(error)
    //     );
    // });
};

};




/** Exports actions */


exports.FETCH_SCORE = FETCH_SCORE;
exports.fetchScore = fetchScore;
exports.MAKE_GUESS = MAKE_GUESS;
exports.makeGuess = makeGuess;
exports.START_NEWGAME = START_NEWGAME;
exports.startNewGame = startNewGame;
exports.FETCH_HIGHSCORE = FETCH_HIGHSCORE;
exports.fetchHighScore = fetchHighScore;
exports.SEND_SCORE = SEND_SCORE;
exports.sendScore = sendScore;
exports.SAVE_SCORE = SAVE_SCORE;
exports.saveGuesses = saveGuesses;
