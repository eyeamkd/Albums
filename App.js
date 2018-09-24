/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StatusBar,Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native'; 
import { Container, Header, Left, Body, Right, Button, Icon, Title ,Card ,CardItem,List ,ListItem} from 'native-base';
import AppHeader from './Components/AppHeader.js';  
import AlbumList from './Components/AlbumList.js';  
import AlbumDetail from './Components/AlbumDetail.js';  
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> { 

  render() { 
    return (
      <View style={styles.ViewStyle} >   
        <View style={styles.HeaderStyle}>  
        <AppHeader name="Album"/> 
        </View>   
        <View style={styles.AlbumListStyle}>  
        <AlbumList/>
         </View> 
           
        <StatusBar  
        backgroundColor="blue" 
        barStyle="light-content"
        />   

      </View> 

    );
  }
}
 
const styles = StyleSheet.create({  
ViewStyle:{  
  flex:1, 
  flexDirection:'column', 
},  
HeaderStyle:{  
  flex:2, 

} ,
AlbumListStyle:{ 
  flex:90,  
  padding:10, 
  marginTop:70, 
  justifyContent:'flex-start',


}

  
});
