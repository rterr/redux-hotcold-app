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
var HighScoreContainer = React.createClass({
  getScore: function(event) {
    event.preventDefault();
    this.props.dispatch(actions.fetchHighScore());
  },
    render: function(){
      return(
        <div className="highScore">
        High score: {props.highScore}
          </div>)
    }
});

var mapStateToProps = function(state, props) {
    return {
      highScore: state.highScore
    };
};

/** Connect the state with the NewGameContainer constructor */
var Container = connect(mapStateToProps)(HighScoreContainer);

/** Exports the NewGameContainer that has been connected with the state */
//module.exports = Container;
module.exports = {
  highScore: HighScoreContainer,
  container: Container
}
