import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Image, FlatList, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import Icon from "react-native-vector-icons/EvilIcons";
import Icon2 from "react-native-vector-icons/MaterialIcons";
import axios from "axios";
const { width, height, scale, fontScale } = Dimensions.get("screen")

export default class Cart extends Component {
    constructor() {
        super();
        this.state = {
            product: {},
            loading: true
        }
    }

    componentDidMount() {
        let req = {
            "url": "http://dadyshop.ir/?woo2app_product_cat&count=10&page=1&cat=%DA%A9%D8%A7%D9%84%D8%A7%DB%8C-%D8%AF%DB%8C%D8%AC%DB%8C%D8%AA%D8%A7%D9%84&orderby=date&order=DESC",
            "method": "get"
        }
        axios(req).then(response => {
            this.setState({ product: response.data.products, loading: false })
        }).catch(error => {
            console.log(error);
        })
    }
    _renderItem = ({ item, index }) => {
        return (
            <View style={styles.items}>
                <View style={styles.itemProduct}>
                    <View style={{ width: width * .63 }}>
                        <Text>{item.title}</Text>
                    </View>
                    <View style={{ width: width * 0.20, marginLeft: 5 }}>
                        <Image source={{ uri: item.images[0].src }} style={{ width: width * .3, height: width * .3 }} />
                    </View>
                </View>
                <View style={styles.itemProductTotal}>
                    <Text style={styles.itemProductTotalText1}>{item.price} تومان</Text>
                    <Text style={styles.itemProductTotalText1}> قیمت کل</Text>
                </View>
                <View style={styles.itemProductTotal}>
                    <Text style={styles.itemProductTotalText2}>{item.price} تومان</Text>
                    <Text style={styles.itemProductTotalText2}> قیمت نهایی</Text>
                </View>
                <View style={{ paddingHorizontal: 5 * scale, paddingVertical: 10 * scale }}>
                    <Text style={{ textAlign: "left", color: "#f5363f" }}> حذف </Text>
                </View>
            </View>
        )
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header} >
                    <View style={styles.headerRight}>
                        <Text style={styles.badge}> 2 </Text>
                        <Icon2 name="shopping-cart" size={25 * fontScale} color={"#fff"} />
                    </View>
                    <View style={styles.headerLeft} >
                        <Text style={{ fontSize: 20 * fontScale, color: "#fff", marginRight: 20 }}>سبد خرید شما</Text>
                        <Icon name="close" size={25 * fontScale} color={"gray"} />
                    </View>
                </View>
                {this.state.loading
                    ?
                    <ActivityIndicator size={"large"} style={{ flex: 1, justifyContent: "center", alignItems: "center" }} />
                    :
                    <View style={{ flex: 1 }}>
                        <View style={styles.total}>
                            <Text style={styles.totalText}>2000 تومان</Text>
                            <Text style={styles.totalText}>جمع کل خرید</Text>
                        </View>
                        <View style={{ flex: 0.8 }}>
                            <FlatList
                                renderItem={this._renderItem}
                                data={this.state.product}
                                keyExtractor={() => Math.random().toString()}
                            />
                        </View>

                        <View style={styles.cartBtn}>
                            <Icon name="chevron-left" size={30 * fontScale} color={"#fff"} />
                            <Text style={{ color: "#fff", fontSize: 20 * fontScale }}>خرید خود را نهایی کنید</Text>
                        </View>
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafc',
    },
    header: {
        backgroundColor: "red",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 5 * scale,
        paddingVertical: 10 * scale
    },
    headerLeft: {
        width: width * 0.3,
        flexDirection: "row",
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",

    },
    headerRight: {
        width: width * 0.25,
        position: 'relative',
    },

    badge: {
        color: 'red',
        position: 'absolute',
        zIndex: 10,
        top: -8,
        left: 10,
        fontSize: 11,
        padding: 1,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "red",
        borderRadius: 500000
    },
    total: {
        backgroundColor: "#fff",
        elevation: 5,
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5 * scale,
        paddingVertical: 10 * scale,
        flex: 0.1,
        maxHeight: 60,
    },
    totalText: {
        fontSize: 17 * fontScale,
        color: "#37ad29"
    },
    items: {
        elevation: 5,
        backgroundColor: "#fff",
        margin: 5 * scale,
        borderRadius: 3
    },
    itemProduct: {
        flexDirection: "row",
        paddingHorizontal: 5 * scale,
        paddingVertical: 10 * scale
    },
    itemProductTotal: {
        backgroundColor: "#fafafa",
        borderTopWidth: 1,
        borderTopColor: "#efefef",
        borderBottomWidth: 1,
        borderBottomColor: "#efefef",
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 5 * scale,
        paddingVertical: 10 * scale
    },
    itemProductTotalText1: {
        fontSize: 15 * fontScale,
        color: "#aeaeae"
    },
    itemProductTotalText2: {
        fontSize: 15 * fontScale,
        color: "#81c684"
    },
    cartBtn: {
        backgroundColor: "#66bb6a",
        flexDirection: 'row',
        justifyContent: "center",
        paddingVertical: 10 * scale,
        flex: 0.1,
        maxHeight: 60,
    }
});
