var React = require('react');
var actions = require('./actions');
var connect = require('react-redux').connect;


var InputContainer = React.createClass({
  onGuessSubmit: function(event) {
      event.preventDefault();
        var userNum = parseInt(this.refs.userInput.value);
/*
        for (var i = 0; i < userEntered.length; i++) {
          if (userEntered[i] == userNum) {
            alert('You already entered this number!');
            return;
          }
        }*/

        this.props.dispatch(actions.makeGuess(userNum));
        this.refs.userInput.value = null;
    },

    render: function(){
      return(
        <div className="inputField">
            <form onSubmit={this.onGuessSubmit}>
              <input type="text" ref="userInput" /><button name="input-button">Guess</button>
              </form>
          </div>)
    }
});

var Container = connect()(InputContainer);

module.exports = Container;
