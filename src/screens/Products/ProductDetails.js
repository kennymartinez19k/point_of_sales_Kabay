import { useRoute } from '@react-navigation/native';
import React from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';

export const ProductDetails = () => {

  const route = useRoute()
  const image = require(route.params.img)
  return (
    <View>
        <Text>{route.params.name}</Text>
        <Image style={styles.img} source={image}/>
        {
          console.log(image)
        }
        <Text>{route.params.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  img:{
    width: 80,
    height: 50
  }
})
