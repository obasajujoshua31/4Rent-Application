import React, { Component } from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';

export default class Component1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switchValue: true
    };
  }

  render() {
    if (!this.state.switchValue) {
      return null;
    }

    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'space-between'
        }}
      >
        {/* <Text>{this.props.value}</Text> */}
        <View
          style={{ width: 50, height: 50, backgroundColor: 'powderblue' }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: 'skyblue' }} />
        <View style={{ width: 50, height: 50, backgroundColor: 'steelblue' }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});

// AppRegistry.registerComponent('Component1', () => Component1)
