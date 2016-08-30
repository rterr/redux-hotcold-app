var React = require('react');
var actions = require('./actions');
var connect = require('react-redux').connect;


var NewGameContainer = React.createClass({
  onNewGameSubmit: function(event) {
    event.preventDefault();
    this.props.dispatch(actions.startNewGame());
  },


    render: function(){
      return(
        <div className="newGameField">
              <form onSubmit={this.onNewGameSubmit}><button name="new-game">New Game</button></form>
          </div>)
    }
});

var Container = connect()(NewGameContainer);

module.exports = Container;
