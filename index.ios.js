'use strict';

var React = require('react-native');
var App = require('./app/app.io.js');

var {
  AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
} = React;

var tangolang = React.createClass({
  render: function() {
    return (
      <App/>
    );
  }
});

AppRegistry.registerComponent('tangolang', () => tangolang);
