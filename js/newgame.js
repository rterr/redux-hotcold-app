/** Declaring dependencies */
var React = require('react');
var actions = require('./actions');
var connect = require('react-redux').connect;

/**
* New Game button constructor
* @namespace NewGameContainer
* @constructor
* Renders a button that allows the user to start a new game
*/
var NewGameContainer = React.createClass({
  onNewGameSubmit: function(event) {
    event.preventDefault();
    this.props.dispatch(actions.saveGuesses());
    this.props.dispatch(actions.startNewGame());
    this.props.dispatch(actions.fetchScore());
  },
    render: function(){
      return(
        <div className="newGameField">
              <form onSubmit={this.onNewGameSubmit}><button name="new-game">New Game</button></form>
          </div>)
    }
});

var mapStateToProps = function(state, props) {
    return {
      highScore: state.highScore
    };
};

/** Connect the state with the NewGameContainer constructor */
var Container = connect(mapStateToProps)(NewGameContainer);

/** Exports the NewGameContainer that has been connected with the state */
//module.exports = Container;
module.exports = {
  newGame: NewGameContainer,
  container: Container
}
