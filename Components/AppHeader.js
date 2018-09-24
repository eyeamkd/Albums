import React, { Component } from 'react'; 
import {Platform, StyleSheet, Text, View,Image,TouchableOpacity} from 'react-native';
import { Container, Header, Left, Body, Right, Button, Icon, Title } from 'native-base';
class AppHeader extends React.Component {
  render() { 
    return ( 
    	<View style={styles.headerStyle}>
	      <Container>
	        <Header style={styles.headerStyle}>
	          <Left>
	            <Button transparent>
	              <Icon name='arrow-back' style={{color:'white'}} />
	            </Button>
	          </Left>
	          <Body>
	            <Title style={{color:'white'}}>{this.props.name}</Title>
	          </Body>
	          <Right>
	            <Button transparent>
	              <Icon name='menu' />
	            </Button>
	          </Right>
	        </Header> 
	      </Container> 
	     </View>
    );
  }
} 

const styles = StyleSheet.create({  
  headerStyle:{  
	  							backgroundColor:'#0152A1',  
		        				shadowColor:'black', 
	    						shadowOffset:{width:0,height:10},
	    						shadowOpacity:0.3,
  },
})


export default AppHeader;
