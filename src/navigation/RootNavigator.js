import * as React from 'react';
import { Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTranslation } from 'react-i18next';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Login from '../screens/LoginScreen'
import {ProfileScreen} from '../screens/ProfileScreen'
import {ProofScreen} from '../screens/ProofScreen'

import {Products} from '../screens/Products/Products'
import { ProductDetails} from '../screens/Products/ProductDetails'



const Tab = createBottomTabNavigator();

function Home() {
    const { t } = useTranslation();

  return (
    <Tab.Navigator 
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        if (route.name === 'Main') {
          return (
            <Ionicons
              name='home'
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Settings') {
          return (
            <Ionicons
              name='ios-list'
              size={size}
              color={color}
            />
          );
        } else if (route.name === 'Profile') {
          return (
            <Ionicons
              name='person'
              size={size}
              color={color}
            />
          );
        }
      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: 'tomato',
    })}
    >
      <Tab.Group screenOptions={{ headerTitleAlign:"center", headerStyle: {backgroundColor: '#fff'}, headerTintColor: '#333'}}>
        <Tab.Screen options={{ title: t('navigate:home')}}  name="Main" component={Products} />
        {/* <Tab.Screen options={{ title: t('navigate:settings')}} name="Settings" component={SettingsScreen} /> */}
        <Tab.Screen options={{ title: t('navigate:profile'), headerShown: false }} name="Profile" component={ProfileScreen} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function RootNavigator() {
  return (
    <NavigationContainer>
    <Stack.Navigator screenOptions={{headerTitleAlign:"center", headerStyle: {backgroundColor: '#4054F5'}, headerTintColor: '#fff'}} initialRouteName='Login'>
      <Stack.Group >
        <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
      </Stack.Group>

      <Stack.Screen
        name="Home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetails}
        options={{title: 'Detalles', headerShown: false}}
      />
      <Stack.Screen
        name="Profile"
        component={ProofScreen}
        options={{title: 'Pruebas'}}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{title: 'Configuraciones'}}
      />
    </Stack.Navigator>
  </NavigationContainer>
  );
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    
    subtitle: {
      fontSize: 16,
      color: 'gray',
  
    },
    titleHelper:{
      fontSize: 13,
      color: '#a9a9a9',
      marginTop: 40,
      marginBottom: 10
    },
    TextInput:{
      width: '80%',
      height: 50,
      padding: 10,
      paddingStart: 20,
      backgroundColor: '#fff',
      color: '#333',
      marginTop: 15,
      borderWidth: 1,
      borderColor: '#ccc'
      
    },
    logo:{
      marginTop: 20,
      width: 200,
      height: 50
  
    },
    button:{
      padding: 10,
      borderRadius: 10,
      width: 200,
      marginTop: 20,
      backgroundColor: '#6F70FF',
      justifyContent: 'center',
      alignItems: 'center'
    }, 
    text:{
      color: '#fff'
    },
    location:{
      marginBottom: 10,
    }
  });
  