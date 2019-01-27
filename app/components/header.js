import React ,{Component} from 'react';
import {Platform,StyleSheet,Text,View,Image,Dimensions} from 'react-native';
import Icon from "react-native-vector-icons/Entypo";
import Icon1 from "react-native-vector-icons/FontAwesome";

const{width,height,scale,fontScale}=Dimensions.get("screen")

export default class App extends Component{
    render(){
        return(
            <View style={styles.header}>

                <View style={styles.headerRight}>
                    <Icon1 name="user" size={30*fontScale} color={"#fff"}/>
                    <Icon1 name="shopping-cart" size={30*fontScale} color={"#fff"}/>
                    <Icon1 name="search" size={30*fontScale} color={"#fff"}/>
                </View>

                <View style={styles.headerLeft}>
                    <Image source={require("./../images/logo.png")} style={{width:150,height:45,marginHorizontal:5*scale}}/>
                    <Icon name="menu" size={30*fontScale} color={"#fff"}/>
                </View>
                
            </View>
        );
    }
}

const styles=StyleSheet.create({
    header:{
        backgroundColor:"red",
        justifyContent:"space-between",
        alignItems:"center",
        flexDirection:"row",
        paddingHorizontal:5*scale,
        paddingVertical:2*scale,
    },

    headerLeft:{
        width:width*0.3,
        flexDirection:"row",
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
    },
    
    headerRight:{
        width:width*0.3,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
});
