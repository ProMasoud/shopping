import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { createIconSetFromIcoMoon } from 'react-native-vector-icons';
import fontelloConfig from './app/selection.json';
const Icon = createIconSetFromIcoMoon(fontelloConfig);

export default class App extends Component {

	render() {
		return (
			<View style={styles.container}>
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

