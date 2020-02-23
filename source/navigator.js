import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useScreens } from 'react-native-screens';

import HomeScreen from './screens/home';
import SearchScreen from './screens/search';
import SettingsScreen from './screens/settings';

useScreens();

const Tab = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#e91e63',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Home',
        tabBarIcon: () => null
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarLabel: 'Search',
        tabBarIcon: () => null
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: 'Settings',
        tabBarIcon: () => null
      }} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyTabs />
    </NavigationContainer>
  );
}
