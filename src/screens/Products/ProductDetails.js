import { useRoute } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';
import img from '../../../assets/image.png'

export const ProductDetails = () => {

  const route = useRoute()
  return (
    <View>
        <Text>{route.params.name}</Text>
        <Image style={styles.img} source={img}/>
        <Text>{route.params.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    width: '80%',
    height: '50%'
  }
})
