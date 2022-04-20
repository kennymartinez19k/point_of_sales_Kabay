import React from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const listProducts = [
    {
        name: "Uva",
        price: "20$"
    },
    {
        name: "Uva",
        price: "20$"
    },
    {
        name: "Uva",
        price: "20$"
    },
    {
        name: "Uva",
        price: "20$"
    },
    {
        name: "Uva",
        price: "20$"
    }
]

export const Products = () => {
  return (
   <View style={styles.container}>
       <Text>Hola</Text>
       
       <Text>Klk</Text> 
       {listProducts.map((prod, idx) => (
           <View key={idx + prod.name} style={styles.item}>
               <Text>{prod.name}</Text>
           </View>

       ))}
   </View>
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    item:{
        width: 100,
        height: 40,
        padding: 10,
        backgroundColor: "#000",
        marginTop: 10

    }
})
