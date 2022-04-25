import React from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';
import img from '../../../assets/image.png'
import { Ionicons } from '@expo/vector-icons';
import { SafeAreaView, ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentProduct } from '../../actions/productAction';



const listProducts = [
    {
        name: "Chocolates",
        price: "20$",
        addToCart: false
    },
    {
        name: "Fresas",
        price: "20$",
        img: '../../../assets/image.png',
        addToCart: false
    },
    {
        name: "Azucar",
        price: "20$",
        img: '../../../assets/image.png',
        addToCart: false
    },
    {
        name: "Leche",
        price: "20$",
        img: '../../../assets/image.png',
        addToCart: false
    },
    {
        name: "Cafe",
        price: "20$",
        img: '../../../assets/image.png',
        addToCart: false
    }
]


export const ProductsList = ({navigation}) => {
 const dispatch = useDispatch();
  
 function setProduct(prod) {
    dispatch(setCurrentProduct(prod))
    navigation.navigate('ProductDetails', prod)
 }
  
  return (
        <ScrollView style={styles.container} >
            <View style={styles.list_items}>
                {listProducts.map((prod, idx) => (
                    <Pressable  key={idx + prod.name} onPress={() => setProduct(prod)} style={styles.item}>
                        <Image style={styles.prod_img} source={img}/>
                        <Text style={styles.title_item}>{prod.name}</Text>
                        <Text style={styles.info_item}>{prod.price}</Text>
                        <Ionicons
                            name='cart'
                            size={24}
                            color="#000"
                            />
                    </Pressable>

                ))}
            </View>
        </ScrollView>       
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10
    },
    item:{
        width: '40%',
        height: 140,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 2,
        margin: '5%',
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,

        elevation: 2,

    },
    list_items:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    prod_img:{
        width: '100%',
        height: '65%'
    },
    title_item:{
        fontSize: 14,
        width: '100%',
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 5,
        marginRight: 5
    },
    info_item:{
        color: '#666',
        fontSize: 12,
        marginLeft: 5,
        marginRight: 5
    }

})
