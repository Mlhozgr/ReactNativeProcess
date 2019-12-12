
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { declaredPredicate } from '@babel/types';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Hoşgeldiniz</Text>
        <View style={styles.arka1}></View>
        <View style={styles.arka2}></View>
        

        
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ddd',
    flex: 1, // arkaplan 1 parça ve container arka1 ve arka2 nin babası
    
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  
  arka1: {
    backgroundColor:'#0C70A5',
    flex:1              // arka2 nin flexi 2 olduğu için toplam 3 parçanın 1 parçası arka1 in

  },
  arka2 :{
    backgroundColor:'#C73E2E',
    flex:2
  }

});
