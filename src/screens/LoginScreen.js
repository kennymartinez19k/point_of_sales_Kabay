import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';
import { useTranslation } from 'react-i18next';



function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={styles.text}>{title}</Text>
      </Pressable>
    );
  }

export default function Login({navigation}) {
  const { t } = useTranslation();
    return (
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../assets/login.png')}
        />
        <Text style={styles.subtitle}>{t('login:lifeExperience')}</Text>
        <Text style={styles.titleHelper}>{t('login:introduceData')}</Text>
        
        <TextInput
          style={styles.TextInput}
          placeholder={t('login:user')}
        />
        <TextInput
          style={styles.TextInput}
          placeholder={t('login:password')}
        />
        <StatusBar style="auto" />
        <Button
          title={t('login:login')}
          onPress={() => navigation.navigate('Home')}
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