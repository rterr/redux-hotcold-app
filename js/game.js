var React = require('react');
var connect = require('react-redux').connect;

var InputContainer = require('./input');
var NewGameContainer = require('./newgame');

var Game = function(props) {
  return(
       <div className="gameField"><div className="numHotness">Rating: {props.numHotness}</div>
      <div className="guessCount">Number of guesses: {props.guessCount}</div>
      <div className="guessSet">Your guesses so far: {props.guessSet.toString()}</div>
     {props.numHotness == 'You win!' ? <NewGameContainer /> : <InputContainer />}
     </div> )}

var mapStateToProps = function(state, props) {
    return {
      randNum: state.randNum,
      numHotness: state.numHotness,
      guessCount: state.guessCount,
      guessSet: state.guessSet
    };
};

var Container = connect(mapStateToProps)(Game);


//module.exports = Game;
module.exports = Container;
