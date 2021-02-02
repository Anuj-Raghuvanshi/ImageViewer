/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect } from 'react';
import {
  StatusBar,
} from 'react-native';
import SplashScreen from 'react-native-splash-screen'

import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import { Provider } from 'react-redux';
import Home from './src/views/Home'
import Messages from './src/views/Messages'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import configureStore from './src/redux/store';

const Tab = createBottomTabNavigator();
const store = configureStore()

const App = () => {

	useEffect(() => {
		setTimeout(() => {
			SplashScreen.hide();
		}, 2000);
	})

  return (
		<Provider store={store}>
			<StatusBar barStyle="dark-content" />
			<SafeAreaProvider>
				<NavigationContainer>
					<Tab.Navigator
						initialRouteName="Home"
						tabBarOptions={{
						activeTintColor: 'blue',
						inactiveTintColor: 'black',
						labelStyle: { fontSize: 18 },
						indicatorStyle: {
							backgroundColor: '#fff',
						},
					}}>
						<Tab.Screen name="Home" component={Home} />
						<Tab.Screen name="Settings" component={Messages} />
					</Tab.Navigator>
				</NavigationContainer>
			</SafeAreaProvider>
		</Provider>
  );
};

export default App;
