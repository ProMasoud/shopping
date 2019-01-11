import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Dimensions,
    ActivityIndicator,
    ScrollView,
    TextInput,
    AsyncStorage,
    DeviceEventEmitter
} from 'react-native';
import SmsAndroid from 'react-native-get-sms-android';

import axios from "axios";
const { width, height, scale, fontScale } = Dimensions.get("screen")

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            product: [
                {
                    id: 1,
                    name: "abc",
                    items: [
                        {
                            id: 1,
                            name: "abc"
                        },
                        {
                            id: 1,
                            name: "abc"
                        },
                        {
                            id: 1,
                            name: "abc"
                        },
                    ]
                },
                {
                    id: 1,
                    name: "abc"
                },
                {
                    id: 1,
                    name: "abc"
                },
                {
                    id: 1,
                    name: "abc"
                },
                {
                    id: 1,
                    name: "abc"
                },
                {
                    id: 1,
                    name: "abc"
                },
            ],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        AsyncStorage.getItem("token").then(token => {
            console.log(token);
        })

        await AsyncStorage.setItem("category", JSON.stringify(this.state.product));
        let category = await AsyncStorage.getItem("category");
        await AsyncStorage.removeItem("category")
        console.log(category, typeof category);

        category = JSON.parse(category)
        console.log(category, typeof category);
        var filter = {
            box: 'inbox', // 'inbox' (default), 'sent', 'draft', 'outbox', 'failed', 'queued', and '' for all
            // the next 4 filters should NOT be used together, they are OR-ed so pick one
            read: 0, // 0 for unread SMS, 1 for SMS already read
            // _id: 1234, // specify the msg id
            // address: '+1888------', // sender's phone number
            // body: 'How are you', // content to match
            // the next 2 filters can be used for pagination
            // indexFrom: 0, // start from index 0
            maxCount: 1, // count of SMS to return each time
        };
        this.sms = setInterval(() => {
            SmsAndroid.list(JSON.stringify(filter), (fail) => {
                console.log("Failed with this error: " + fail)
            },
                (count, smsList) => {
                    console.log('Count: ', count);
                    console.log('List: ', JSON.parse(smsList)[0]);
                    let arr = JSON.parse(smsList);
                    if (arr[0].address == "+989390491256") {
                        clearInterval(this.sms)
                    }
                    // arr.forEach(function (object) {
                    //     console.log("Object: " + object);
                    //     console.log("-->" + object.date);
                    //     console.log("-->" + object.body);
                    // })
                });
        }, 1000)

        DeviceEventEmitter.addListener('sms_onDelivery', (msg) => {
            console.log(msg);
        });
    }

    onLogin = async () => {
        SmsAndroid.autoSend("+989390491256", "سلام سلام ", (fail) => {
            console.log("Failed with this error: " + fail)
        }, (success) => {
            console.log("SMS sent successfully");
        });
        return
        if (!this.state.username) {
            alert("the fields are required")
        }
        this.setState({ loading: true })

        let req = {
            url: "http://beta.farvak.com/api/verifyCode",
            method: "post",
            timeout: 5000,
            data: {
                twfa_code: this.state.username,
            }
        }
        axios(req).then(async res => {
            console.log(res.data);

            this.setState({ loading: false })
            if (res.data.status == "success") {
                await AsyncStorage.setItem("token", res.data.data.token)
                await AsyncStorage.setItem("user", JSON.stringify(res.data.user))
                alert("login is successful")

                let ui = res.data.checkbox ? <TextInput onChangeText={(text) => {
                    let request = this.state.request
                    request.push({ checkbox: text })
                    this.setState({ request: request })
                }} /> : null

            } else {
                console.log(res, req);
                alert("login failed")
            }
        }).catch(error => {
            this.setState({ loading: false })
            console.log(error.message, req);
            alert("login failed")
        })
    }

    render() {
        let product = this.state.product
        return (
            <View style={styles.container}>
                <View style={styles.inputArea} >
                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ username: text })}
                        placeholder={"Username"}
                    />
                </View>


                <TouchableOpacity onPress={() => this.onLogin()} style={[styles.inputArea, { backgroundColor: "#42c5f4" }]} >
                    {this.state.loading ? <ActivityIndicator /> : <Text
                        style={[styles.input, { color: "#fff", alignSelf: "center" }]}
                    >Login</Text>}
                </TouchableOpacity>


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafc',
        justifyContent: "center",
        alignItems: "center"
    },
    header: {
        backgroundColor: "white",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
        paddingHorizontal: 5 * scale,
        paddingVertical: 2 * scale
    },
    headerLeft: {
        width: width * 0.15,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center",

    },
    headerRight: {
        width: width * 0.25,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    text: {
        fontSize: 25
    },
    input: {
        fontSize: 20,
        width: width - 80
    },
    inputArea: {
        justifyContent: "center",
        alignItems: "center",
        borderColor: "lightgray",
        borderWidth: 1,
        marginHorizontal: 20,
        borderRadius: 80
    }
});
