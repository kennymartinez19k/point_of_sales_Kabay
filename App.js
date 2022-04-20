import * as React from 'react';
import {  StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Login from './Components/Login'
import About from './Components/About'
import HomeScreen from './Components/Home'
import SettingsScreen from './Components/Settings'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import Profile from './Components/Profile'
import { Products } from './Components/Products';



const Tab = createBottomTabNavigator();

function Home() {
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
        <Tab.Screen options={{ title: 'Inicio'}}  name="Main" component={HomeScreen} />
        <Tab.Screen options={{ title: 'Productos'}} name="Settings" component={Products} />
        
        <Tab.Screen options={{ title: 'Perfil', headerShown: false }} name="Profile" component={Profile} />
      </Tab.Group>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTitleAlign:"center", headerStyle: {backgroundColor: '#4054F5'}, headerTintColor: '#fff'}} initialRouteName='Login'>
        <Stack.Group >
          <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
          <Stack.Screen name="About" component={About} />
        </Stack.Group>

        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
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
