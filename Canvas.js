'use strict';
import React, { Component } from 'react';
import { View, WebView } from 'react-native';


var Canvas = React.createClass({

  propTypes: {
    context: React.PropTypes.object,
    render: React.PropTypes.func.isRequired
  },

  render() {

    var contextString = JSON.stringify(this.props.context);
    var renderString = this.props.render.toString();

    return (
      <View>
        <WebView
          automaticallyAdjustContentInsets={false}
          contentInset={{top: 0, right: 0, bottom: 0, left: 0}}
          injectedJavaScript = {"console.log('renderFunc:"+renderString+");var canvas = document.querySelector('canvas');(" + renderString + ").call(" + contextString + ", canvas);"}
          source={{html:"<canvas></canvas>"}}
          opaque={false}
          style={{
      margin:0,
      padding:0,
      position:"absolute",
      transform:"translateZ(0)"
          }}
        />
      </View>
    );
  }
});

module.exports = Canvas;
