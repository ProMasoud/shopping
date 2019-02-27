import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View, Dimensions } from 'react-native';
import { WebView } from "react-native-webview";

const { width, height } = Dimensions.get('screen')
export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<WebView allowFileAccess={true} scalesPageToFit style={{ width }} source={{
					baseUrl: "",
					html: `<video width="${width}" height="${height * 0.8}" controls>
					<source src="file:///android_asset/vi.mp4" type="video/mp4">
					</video>`
				}} />
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
