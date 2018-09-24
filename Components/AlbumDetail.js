import React from 'react'; 
import {Text,View , StyleSheet , Image , Linking} from 'react-native';  
import Card from './Card.js'; 
import CardSection from './CardSection.js';
import Button from './Button.js';

const AlbumDetail=(props)=>{  
	 
		return( 
		<Card style={styles.AlbumDetailStyle}>   
			<CardSection>
				<View style={{marginLeft:5,marginRight:10 , justifyContent:'center', alignItems:'center'}}> 
					<Image 
					source={{uri:props.album.thumbnail_image}}  
					style={styles.ImageStyle}
					/>
				</View> 

				<View style={{flexDirection:'column',justifyContent:'space-around'}}>  
					<Text style={{fontSize:20}}>{props.album.title}</Text> 
					<Text>{props.album.artist}</Text> 
				</View>
			</CardSection> 

			<CardSection>  
				<View>  
					<Image  
					source={{uri:props.album.image}} 
					style={styles.ArtworkStyle} 
					/>
				</View> 
			</CardSection> 

			<CardSection>  
				<Button onPress={()=>Linking.openURL(props.album.url)} ButtonText='Buy Now'/>
			</CardSection> 

		</Card> 
			); 
}
 
const styles=StyleSheet.create({  
	AlbumDetailStyle:{ 

	} , 
	ImageStyle:{  
		height:60,
		width:60,
	},
	ArtworkStyle:{   
		height:300,
		width:330,
	}
})
export default AlbumDetail; 