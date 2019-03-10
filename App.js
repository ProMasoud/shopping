import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Image, AsyncStorage, ScrollView } from 'react-native';
import { WebView } from "react-native-webview";
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import RNFetchBlob from 'rn-fetch-blob'
import fontelloConfig from './app/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);

const { width, height } = Dimensions.get('screen')
const dirs = RNFetchBlob.fs.dirs
let imageView;
export default class App extends Component {

	constructor() {
		super();
		this.state = {
			image: null
		}
	}

	async componentDidMount() {
		// let ls = await RNFetchBlob.fs.ls(dirs.DownloadDir)
		// console.log(dirs);
		// console.log(dirs);
		// console.log(dirs.DownloadDir);

		// RNFetchBlob
		// 	.config({
		// 		path: dirs.DocumentDir + "/sds1.mp4",
		// 		// fileCache: true,
		// 		// appendExt: 'mp4'
		// 	})
		// 	.fetch('GET', 'https://www.w3schools.com/html/mov_bbb.mp4', {
		// 		filename: "1",
		// 	})
		// 	.then(async (res) => {
		// 		// the temp file path with file extension `png`
		// 		console.log('The file saved to ', res.path())
		// 		await AsyncStorage.setItem("image", res.path())
		// 		this.setState({ image: res.path() })
		// 	});
		// this.setState({ image: await AsyncStorage.getItem('image') })
	}

	render() {
		console.log(this.state.image);

		return (
			<View style={styles.container}>
				{/* <WebView allowFileAccess={true} scalesPageToFit style={{ width }} source={{
					baseUrl: "/",
					html: `<video width="${width}" height="${height * 0.5}" controls>
					<source src="file://${this.state.image}" type="video/mp4">
					</video>`
				}} />
				{this.state.image} */}

				<ScrollView>
					<Icon name="cake" size={180} color="#656589" />
					<Icon name="fast-food" size={180} color="#656589" />
					<Icon name="Irani" size={180} color="#656589" />
					<Icon name="sea_food" size={150} color="#656589" />
					<Icon name="coffee-with-cream" size={180} color="#656589" />
					<Icon name="fried-chicken" size={180} color="#656589" />
					<Icon name="kebabi" size={180} color="#656589" />
				</ScrollView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});
