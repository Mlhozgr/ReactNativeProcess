
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <View style={[styles.box1,styles.ortak]}></View>
        <View style={[styles.ortak,styles.box2]}></View>

        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
  box1: {
    backgroundColor:'#E13131',
    
    
  },
  box2:{
    backgroundColor:'#ddd'
  },
  ortak: {
    width:250,
    height:250,
    borderWidth:5,
    marginBottom:5
  }

});
