/* yorum satırı */

import React, {Component} from 'react';
import { StyleSheet, Text, View,Button} from 'react-native';
import Card from './src/components/Card'; 

export default class App extends Component {
  state = {
    name :'kullanıcı'
  };
  state = {
    number:0
  };
  onPressNameChange = () => {                     /* Butonun çağıracağı event */
    this.setState({                               /*State değerini değiştirmek için setState    */
        name : 'kanka',
    });
    };
    
    onPressNumberDecrease = () => {
      this.setState({
        number : --this.state.number,

      });
    };
    onPressNumberIncrease = () => {
      this.setState({
        number : ++this.state.number,

      });

    };
 
  render() {
    return (
      <View style={styles.container}>
         
        
         <View style={styles.arka1}> 
          <View style={[styles.box,styles.box2]}></View>  
         <View style={[styles.box,styles.box1]}></View>  
        </View> 
        <View style={styles.arka2}>
          <Text  /* statein çağrılma şekli */>Merhaba  {this.state.name}</Text> 
          <Card text='Hello' backgroundColor='#ddd' />                                        
          <Card text='Login' />
          <Card deneme1={2019} text='$' backgroundColor='#fff'/>
          <View>         
            <Text  > </Text>
            
              </View>
          <Button 
                title='kanka?'                           /* Buton işlemleri */
                color='red'
                onPress={this.onPressNameChange}
                />
           <Button 
                title='Azalt'
                color='blue'
                onPress={this.onPressNumberDecrease}
           
           />
           <Button 
                title='Arttır'
                color='blue'
                onPress={this.onPressNumberIncrease}
                  />
                <Text>{this.state.number}</Text>       

              
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
