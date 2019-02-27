import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions, Image, AsyncStorage } from 'react-native';
import { WebView } from "react-native-webview";
import RNFetchBlob from 'rn-fetch-blob'

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

		RNFetchBlob
			.config({
				path: dirs.DocumentDir + "/sds1.mp4",
				// fileCache: true,
				// appendExt: 'mp4'
			})
			.fetch('GET', 'https://www.w3schools.com/html/mov_bbb.mp4', {
				filename: "1",
			})
			.then(async (res) => {
				// the temp file path with file extension `png`
				console.log('The file saved to ', res.path())
				await AsyncStorage.setItem("image", res.path())
				this.setState({ image: res.path() })
			});
		this.setState({ image: await AsyncStorage.getItem('image') })
	}

	render() {
		console.log(this.state.image);

		return (
			<View style={styles.container}>
				<WebView allowFileAccess={true} scalesPageToFit style={{ width }} source={{
					baseUrl: "/",
					html: `<video width="${width}" height="${height * 0.5}" controls>
					<source src="file://${this.state.image}" type="video/mp4">
					</video>`
				}} />
				{/* {this.state.image} */}
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
