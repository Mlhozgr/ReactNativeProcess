import React, { Component } from 'react';
import {StyleSheet, View, Text } from 'react-native';
import PropTypes from 'prop-types'; //properties tiplerini getir

export default class Card extends Component {
  render() {
    const {text,backgroundColor,deneme1} =this.props;
    return (
      <View style={[styles.CardContainer, {backgroundColor}]}>
        <Text syle={styles.cardText}> {text} </Text>
        <Text style={styles.cardText}>{deneme1}</Text>
      </View>
    );
  }
}

Card.propTypes= {
  text: PropTypes.string.isRequired,  // Property type string olmalı ve her app.js de her Card kullanıldığında text te mutlaka kullanılmalı demek
  backgroundColor:PropTypes.string,
  deneme1:PropTypes.number


};
const styles =StyleSheet.create({
    
    CardContainer:{
        padding:10,
        borderWidth: 2,
        borderColor: '#000',
    },
    cardText:{
        fontSize:18,
    }
});

