import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';

export default class Card extends Component {
 

  render() {
    return (
      <View style={styles.CardContainer}>
        <Text syle={styles.cardText}> Card </Text>
      </View>
    );
  }
}
const styles =StyleSheet.create({
    
    CardContainer:{
        padding:10,
        borderWidth: 2,
        borderColor: '#000',
    },
    cardText:{
        fontSize:18,
    }
}),
