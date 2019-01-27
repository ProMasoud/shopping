import React,{Component} from 'react';
import{Platform,StyleSheet,FlatList,View,Image,Dimensions,ScrollView,Text,TouchableOpacity} from 'react-native';
import Header from "./../components/header";
import InvertibleScrollView  from 'react-native-invertible-scroll-view';
import  Category  from "./../components/Category";
const{width,height,scale,fontScale}=Dimensions.get("screen")

export default class App1 extends Component{
    constructor(props){
        super(props);
        this.state={
            timer:150000
        }
    }
    
    componentDidMount(){
        this.intval=setInterval(()=>{
            this.setState({timer:this.state.timer-1})
        },1000)
    }
    _renderItem=({item,index})=>{
        return(
            <View style={styles.item}>
                <Text>{item}</Text>
            </View>
        )
    }

    render(){
        const data=[
            "سوپر مارکت","ورزش و سفر","اسباب بازی،کودک و نوزاد","کتاب ، لوازم تحریر و هنر","خانه و آشپزخانه","مد و پوشاک","خودرو، ابزار و اداری","آرایشی، بهداشتی و سلامت"," کالای دیجیتال"
        ]
        let screenWidth=Dimensions.get('window').width;
        let screenHeight=Dimensions.get('window').height;
        return(
        <View style={StyleSheet.container}>
            <ScrollView>
                <Header />
                <ScrollView  
                    horizontal={true} 
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={true}
                >
                    <Image source={require("./../images/1.png")} style={{width:screenWidth,height:180}}/>
                    <Image source={require("./../images/2.png")} style={{width:width,height:180}}/>
                    <Image source={require("./../images/3.png")} style={{width:width,height:180}}/>
                </ScrollView>
                <FlatList
                    renderItem={this._renderItem}
                    data={data}
                    horizontal={true}
                    keyExtractor={()=>Math.random().toString()}
                />
                <View style={styles.awesome}>
                        <Text>  </Text>
                        <Text style={{color:"white",fontSize:25,backgroundColor:"gray"}}>
                            {Math.floor(this.state.timer/3600)}
                        </Text>
                        <Text style={{color:"black", fontSize:15}}>:</Text>
                        <Text style={{color:"white",fontSize:25,backgroundColor:"gray"}}>
                            {Math.floor((this.state.timer%3600)/60)}
                        </Text>
                        <Text style={{color:"black", fontSize:15}}>:</Text>
                        <Text style={{color:"white",fontSize:25,backgroundColor:"gray"}}>
                            {Math.floor((this.state.timer%3600)%60)}    
                        </Text>
                        <View style={styles.awesomeRight}>
                            <Text style={{color:"red",fontSize:25}}> شگفت انگیز</Text> 
                            <Text style={{color:"black",fontSize:25}}>پیشنهاد</Text>
                        </View>
                </View>
                <ScrollView scrollEventThrottle={16}>
	                <View style={{flex:1,paddingTop:10}}>
		                <View style={{height:240,marginTop:10,backgroundColor:'white'}}>
			                <ScrollView horizontal={true}  showHorizontalScrollIndicator={false} InvertibleScrollView={false}>
                                <TouchableOpacity>
                                    <Category imageUri={require('../images/rogan.jpg')}
                                        name='روغن موتور مبانول'
                                        lastprice='110,000'
                                        price='49,000تومان'
                                        />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Category imageUri={require('../images/esperi.jpg')}
                                        name='اسپری واکس بدنه'
                                        lastprice='189,000'
                                        price='109,000تومان'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Category imageUri={require('../images/model.jpg')}
                                        name='مدل سازی ریول'
                                        lastprice='130000'
                                        price='81,900تومان'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Category imageUri={require('../images/sharjer.jpg')}
                                        name='شارژر همراه کمیلون'
                                        lastprice='226,000'
                                        price='179,000تومان'
                                    />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <Category imageUri={require('../images/gaza.jpg')}
                                        name='غذاساز دستی'
                                        lastprice='193,000'
                                        price='83,000تومان'
                                    />
                                </TouchableOpacity>
			                </ScrollView>
                        </View>
	                </View>
                </ScrollView>
                <Image source={require("./../images/ghaza.jpg")} style={{width:width,height:150}}/>
                <View style={{width:width,height:150,flexDirection:"row"}}>
                    <Image source={require("./../images/oto.jpg")} style={{width:100, flex:1}}/>
                    <Image source={require("./../images/pazerayi.jpg")} style={{width:100,flex:1}}/>
                </View>
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        
        flex: 1,
        backgroundColor: '#f2efef',
    },
    item:{
        fontSize:50,
        backgroundColor:"#23ce3c",
        borderRadius:50000,
        justifyContent:"center",
        alignItems:'center',
        paddingHorizontal:15,
        paddingVertical:15,
        height:40,
        marginHorizontal:5,
        marginVertical:10,
    },
    awesome:{
        flexDirection:"row",
        justifyContent:"flex-start",
        alignItems:"center",
        paddingHorizontal:7,
        paddingVertical:5,
    },
    awesomeRight:{
        flexDirection:"row",
        flex:1,
        justifyContent:"flex-end",
        alignItems:"center",
        paddingHorizontal:7,
        paddingVertical:5,
    },
})
