/** Declaring dependencies */
var React = require('react');
var connect = require('react-redux').connect;

var InputContainer = require('./input').container;
var NewGameContainer = require('./newgame').container;

/**
* Game field constructor
* @namespace Game
* @constructor
* Outputs information about the current game
* Selects whether to display a New Game option if the current game has been won
*/
var Game = function(props) {
  return(
      <div className="gameField"><div className="numHotness">Rating: {props.numHotness}</div>
      <div className="guessCount">Number of guesses: {props.guessCount}</div>
      <div className="guessSet">Your guesses so far: {props.guessSet.toString()}</div>
     {props.numHotness == 'You win!' ? <NewGameContainer /> : <InputContainer />}
     <div className="highScore">High score: {props.highScore} guesses</div>
     </div> )}

/**
* Map State to Props
* @constructor
* Identifying which portions of the state correlate to which props
*/
var mapStateToProps = function(state, props) {
    return {
      randNum: state.randNum,
      numHotness: state.numHotness,
      guessCount: state.guessCount,
      guessSet: state.guessSet,
      highScore: state.highScore
    };
};

/** Connect the state/props mapper to the Game constructor */
var Container = connect(mapStateToProps)(Game);


/** Exports the Game that has been connected with the state */
//module.exports = Container;

module.exports = {
  game: Game,
  container: Container
}
