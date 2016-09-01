var React = require('react');
var sinon = require('sinon');
var TestUtils = require('react-addons-test-utils');
var should = require('chai').should();
var assert = require('chai').assert();
var connect = require('react-redux').connect;
var ReactDOM = require('react-dom');
var Provider = require('react-redux').Provider;

var store = require('../js/store');
var InputContainer = require('../js/input').input;

describe('Input component', function() {
    it.only('Renders the input container',  function() {
        var renderer = TestUtils.createRenderer();
        var hotness = 'Cold';
        renderer.render(
          <InputContainer />)
        var input = renderer.getRenderOutput();
        console.log(input.props.children.props.onSubmit);
        input.props.className.should.equal('inputField');
        input.props.children.type.should.equal('form');
        input.props.children.props.children.length.should.equal(2);
        input.props.children.props.children[0].type.should.equal('input');
        input.props.children.props.children[0].ref.should.equal('userInput');
        input.props.children.props.children[1].type.should.equal('button');
        input.props.children.props.children[1].props.name.should.equal('input-button');
        //input.props.children.props.onSubmit.__reactBoundMethod.should.equal(guessTest);
    });
});

describe('onGuessSubmit', function() {
  it('should call the callback function', function() {
    var renderer = TestUtils.createRenderer();
    var hotness = 'Cold';
    renderer.render(
      <InputContainer />)
    var input = renderer.getRenderOutput();
    var callback = sinon.spy();

    onGuessSubmit(true, callback);

    assert(callback.calledOnce);
  });
});
