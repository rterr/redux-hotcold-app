/** Declaring dependencies */
var redux = require('redux');
var createStore = redux.createStore;
var applyMiddleware = redux.applyMiddleware;
var thunk = require('redux-thunk').default;

var reducers = require('./reducers');
var actions = require('./actions');

/** Creating a store for the state produced by the gameController reducer */
var store = createStore(reducers.gameController, applyMiddleware(thunk));

/** Exports the store */
module.exports  = store;
