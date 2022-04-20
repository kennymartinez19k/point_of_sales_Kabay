import * as React from 'react';
import { Text, View, Pressable, StyleSheet } from 'react-native';

function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
}
  
  export default function HomeScreen({navigation}) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Home!</Text>
        <Button
            title="Mas Sobre Nosotros"
            onPress={() => navigation.navigate('About')}
            accessibilityLabel="Learn more about this purple button"
          />
      </View>
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
  