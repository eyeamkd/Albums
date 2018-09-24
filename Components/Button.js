import React from 'react'; 
import {View , Text ,TouchableOpacity} from 'react-native'; 

const Button =(props)=>{  
	return(   
		<TouchableOpacity 
		onPress={props.onPress}
		style={styles.ButtonStyle} 
		>
		<Text style={{color:'white'}}>{props.ButtonText}</Text>
		</TouchableOpacity>
		); 

}; 

const styles={ 
	ButtonStyle:{   
		flex:1,
		backgroundColor:'green',
		margin:5,
		padding:10, 
		alignItems:'center',
	}
}
 

export default Button;