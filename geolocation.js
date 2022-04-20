import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Location from 'expo-location';




const CounterApp = () => {
    const [location , setLocation] = useState("")

    const editLocation = (coords) => {
        let data = `${coords.latitude} y ${coords.longitude}`
        setLocation(data)
    }
  

    const handleAdd = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            alert('error')
            setErrorMsg('Permission to access location was denied');
            return;
        }
        try{
            let ubication = await Location.getCurrentPositionAsync({});
            let data = `${ubication.coords.latitude} y ${ubication.coords.longitude}`
            setLocation(data)
        }catch(error){
        }
    }
    

    return (
        <>
        <View>
            <Text>{location}</Text>
        </View>

        </>
      )
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
    }
  });
  

export default CounterApp
