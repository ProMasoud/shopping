import React,{Component} from "react";
import {
	View,
	Text,
	StyleSheet,
	Image
 } from "react-native";

class Category extends Component{
	render(){
		return(
			<View style={{height:230,width:150,marginLeft:15,borderWidth:0.5,borderColor:'#dddddd'}}>
				<View style={{flex:2}}>
					<Image source={this.props.imageUri} style={{flex:2,width:null,height:null,resizeMode:'cover'}}/>
				</View>
				<View style={{flex:1.5,paddingLeft:10,paddingTop:5}}>
					<Text>{this.props.name}</Text>
					<Text style={{color:'gray',textDecorationLine: 'line-through', textDecorationStyle: 'solid'}}>{this.props.lastprice}</Text>
					<Text style={{color:'red'}}>{this.props.price}</Text>
				</View>
			</View>
		);
	}
}	
export default Category;

const styles=StyleSheet.create({
container:{
	flex:1,
	alignItems:'center',
	justifyContent:'center',
}
});
