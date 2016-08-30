var actions = require('./actions');
var update = require('react-addons-update');

var initialGameState = {
  randNum: parseInt(Math.random() * (100) + 1),
  myNum: 0,
  numHotness: '',
  guessCount: 0,
  guessSet: []
};

var gameController = function(state, action) {
    state = state || initialGameState;
    if (action.type === actions.MAKE_GUESS){

        if (action.userNum > 100|| isNaN(action.userNum) || action.userNum === undefined) {
          alert('Please enter an integer between 1 and 100');
          return state;
        }
        for (var i = 0; i < state.guessSet.length; i++) {
          if (state.guessSet[i] == action.userNum) {
            alert('You already entered this number!');
            return state;
          }
        };

      var numRating;
      var diffNum = Math.abs(state.randNum - action.userNum);
      if (diffNum >= 50){
        numRating = 'Ice cold'
      }
      else if (diffNum < 50 && diffNum >= 30){
        numRating = 'Cold'
      }
      else if (diffNum < 30 && diffNum >= 20){
        numRating = 'Warm'
      }
      else if (diffNum < 20 && diffNum >= 10){
        numRating = 'Hot'
      }
      else if (diffNum < 10 && diffNum >= 1){
        numRating = 'Very hot!'
      }
      else {
        numRating = 'You win!'
      }
      console.log('randNum is', state.randNum);
      console.log('userNum is', action.userNum);
      console.log('numRating is', numRating);

      var initSet = state.guessSet.slice();
      console.log('initSet is', initSet);
      var afterSet = initSet.concat([action.userNum]);
      console.log('afterSet is', afterSet);


      var guessCounter = state.guessCount + 1

      var newState = update(state, {
        myNum: {$set: action.userNum},
        numHotness: {$set: numRating},
        guessSet: {$set: afterSet},
        guessCount: {$set: guessCounter}
      });

      return newState;
    };

    if (action.type === actions.START_NEWGAME){
      var newRandNum = parseInt(Math.random() * (100) + 1)
      var newGameState = update(initialGameState, {
        randNum: {$set: newRandNum}
      })

      return newGameState;
    };

    return state;
};

exports.gameController = gameController;
