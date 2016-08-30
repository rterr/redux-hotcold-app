// var actions = require('./actions');
// var reducers = require('./reducers');
// var redux = require('redux');
var React = require('react');
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('./store');
var Game = require('./game');

// store.dispatch(actions.makeGuess(53));
// store.dispatch(actions.makeGuess(23));
// store.dispatch(actions.makeGuess(1));
// console.log(store.getState());

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render(
      <Provider store={store}>
        <Game/>
      </Provider>,
      document.getElementById('app')
    );
});
