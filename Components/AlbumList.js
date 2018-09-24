import React from 'react'; 
import { Text, ScrollView ,StyleSheet} from 'react-native'; 
import AlbumDetail from './AlbumDetail.js';

class AlbumList extends React.Component{  
	
		
		state={  
		albums:[],
			} 

 
	

	componentDidMount(){  
		fetch("https://rallycoding.herokuapp.com/api/music_albums")
		.then(resp=>resp.json()) 
		.then(respdata=>this.setState({albums:respdata}))
		.catch(err=>console.log(err));
	} 
	renderAlbums(){   
		return this.state.albums.map(album=>{   
			return(  
				<AlbumDetail 
				album={album}
				/>
				
				);  
			
		});
	}
	render(){   
		console.log(this.state); 
		return(  

			<ScrollView style={styles.AlbumListStyle}>  
				{this.renderAlbums()}
			</ScrollView>
			);
	}
}  

const styles=StyleSheet.create({  
	AlbumListStyle:{ 
		
			}
});

export default AlbumList;