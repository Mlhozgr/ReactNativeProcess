/* yorum satırı */

import React, {Component} from 'react';
import { StyleSheet, Text, View,Button,Image, TouchableOpacity, TextInput} from 'react-native';
import Card from './src/components/Card'; 

export default class App extends Component {
  state = {
    name :''
  };
  state = {
    number:0
  };
  onPressAlert = ()  => {
    alert('Uygulamayı Beğendiniz mi?');
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
    _onChangeText = text => {
      this.setState({
        name:text,
      })
    }
 
  render() {
    const{name}=this.state;
    return (
      <View style={styles.container}>
       
        
         
        
        
        
          <View>
            <Image source={require('./android/app/src/main/assets/kb.png')} ></Image>
          </View>
          <View>
          <View >
      <Text>{name}</Text>
      <TextInput
      
      value={name}
      onChangeText={this._onChangeText}
      style={styles.myInput}/></View> 
            
                <TouchableOpacity style={{marginBottom:40}}>
                    <View style={styles.buttonContainer}>
              <Text style={styles.buttonTitle}>Login</Text>
                    </View>
              </TouchableOpacity>
              <TouchableOpacity
                  onPress={this.onPressAlert}    >            
                  <Image 
                  style={{height:100 , width:100}} 
                  source={require('./android/app/src/main/assets/like.png')}>

                  </Image>
              </TouchableOpacity>
              
          </View>
          
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
  
    flex: 1, // arkaplan 1 parça ve container arka1 ve arka2 nin babası
    flexDirection:'column',
    backgroundColor:'#C73E2E',
                               
                                  
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:10
    },

   

  buttonContainer:{
    borderRadius:15,
    padding:15,
    backgroundColor:'white'
    
  },
  buttonTitle:{
    fontSize:24
  },
  myInput:{
    width:'100%',
    height:40,
    borderWidth:2,
    borderColor:'blue',
    backgroundColor:'white' 

  }

});
