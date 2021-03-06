import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { enableScreens } from 'react-native-screens';
import Icon from 'react-native-vector-icons/EvilIcons';

import HomeScreen from './screens/home';
import SearchScreen from './screens/search';
import SettingsScreen from './screens/settings';
import ProfileScreen from './screens/profile';
import CreateAndUpdateScreen from './screens/create-and-update';

enableScreens();

const Tab = createBottomTabNavigator();

const getHeaderTitle = route => {
  const routeName = route.state ? route.state.routes[route.state.index].name : route.params?.screen || 'Home';

  switch (routeName) {
    case 'Home':
      return 'Bem-vindo';
    case 'Search':
      return 'Buscar por...';
    case 'Settings':
      return 'Configurações';
  }
}

const Tabs = ({ navigation, route }) => {
  navigation.setOptions({ headerTitle: getHeaderTitle(route) });

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#fff',
        activeBackgroundColor: '#2f3043',
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarLabel: 'Início',
        tabBarIcon: ({ color, size }) => {
          return <Icon name="calendar" size={size} color={color} />;
        }
      }} />
      <Tab.Screen name="Search" component={SearchScreen} options={{
        tabBarLabel: 'Busca',
        tabBarIcon: ({ color, size }) => {
          return <Icon name="search" size={size} color={color} />;
        }
      }} />
      <Tab.Screen name="Settings" component={SettingsScreen} options={{
        tabBarLabel: 'Config',
        tabBarIcon: ({ color, size }) => {
          return <Icon name="gear" size={size} color={color} />;
        }
      }} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Root" component={Tabs} options={({ route }) => ({
          headerTitle: getHeaderTitle(route),
        })} />
        <Stack.Screen name="Profile" component={ProfileScreen} options={({ route }) => ({
          headerTitle: route.params.name
        })} />
        <Stack.Screen name="CreateAndUpdate" component={CreateAndUpdateScreen} options={({ route }) => ({
          headerTitle: route.params.name ? 'Editar perfil' : 'Novo cadastro'
        })} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
