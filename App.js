/* yorum satırı */

import React, {Component} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import Card from './src/components/Card'; 

export default class App extends Component {
  onPressDetail = () => {                     /* Butonun çağıracağı event */
    alert('Detail'); 
  };
 
  render() {
    return (
      <View style={styles.container}>
       
        
         <View style={styles.arka1}> 
          <View style={[styles.box,styles.box2]}></View>  
         <View style={[styles.box,styles.box1]}></View>  
        </View> 
        <View style={styles.arka2}>
          <Text>Merhaba kullanıcı</Text> 
          <Card text='Hello' backgroundColor='#ddd' />                                        
          <Card text='Login' />
          <Card deneme1={2019} text='$' backgroundColor='#fff'/>
          <Button 
                title='BUTON'                           /* Buton işlemleri */
                color='red'
                onPress={this.onPressDetail}
                />
        </View>
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
    flexDirection:'column',
    justifyContent:'center' //kutucukları ortaladı
    

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
    flex:2,                           
    flexDirection:'column',                              
    justifyContent:'center',
    alignItems:'center'
    
  }

});
