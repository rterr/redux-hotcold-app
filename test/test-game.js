var React = require('react');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var connect = require('react-redux').connect;
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('../js/store');
var Game = require('../js/game');

var Container = connect(mapStateToProps)(Game);

var mapStateToProps = function(state, props) {
    return {
      randNum: state.randNum,
      numHotness: state.numHotness,
      guessCount: state.guessCount,
      guessSet: state.guessSet
    };
};

describe('Game component', function() {
    it('Renders the game field',  function() {
        var renderer = TestUtils.createRenderer();
        renderer.render(<Provider store={store}>
          <Game guessCount='5' numHotness='Cold' guessSet='[1, 2, 3]' />
        </Provider>);
        var game = renderer.getRenderOutput();
        console.log(game);
    });
});
