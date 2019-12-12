
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { declaredPredicate } from '@babel/types';



type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        
        <View style={styles.arka1}>
          <View style={[styles.box,styles.box2]}></View>
          <View style={[styles.box,styles.box1]}></View>
        </View>
        <View style={styles.arka2}></View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:'#ddd',
    flex: 1, // arkaplan 1 parça ve container arka1 ve arka2 nin babası
    flexDirection:'row'
    },

 arka1: {
    backgroundColor:'#0C70A5',
    flex:1,              // arka2 nin flexi 2 olduğu için toplam 3 parçanın 1 parçası arka1 in
    flexDirection:'column'
    },
  box: {
    height:100,
    width:138
  },
  box1:{
    backgroundColor:'#1C2833',
    
},
  box2: {
    backgroundColor:'#fff'
  },
  arka2 :{
    backgroundColor:'#C73E2E',
    flex:2
  }

});
