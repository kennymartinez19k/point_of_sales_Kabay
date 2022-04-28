import React from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';
import { ScrollView , Linking} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { setCurrentProduct } from '../../actions/productAction';

import { FAB } from 'react-native-paper';

const listProducts = [
    {
        name: "Chocolates Hershey",
        price: "RD$20",
        unit: "1",
        addToCart: false,
        img: [
            'https://i.mctimg.com/cdn-cgi/image/w=400,h=400,fit=pad/https://i.mctimg.com/file/d1ac5d2d370a3bacca4734005321f9b5eb63d105/107c545cec0782e12419532bd30081b6d342800e7aae0831111545756f518401'
        ],
        supplier: 'Almacen Morillo',
    },
    {
        name: "Paquete Fresas",
        price: "RD$20",
        unit: "3",
        img: ['https://s1.1zoom.me/big0/197/Strawberry_Closeup_White_494405.jpg'],
        addToCart: false,
        supplier: 'Almacen Morillo',
    },
    {
        name: "Refreco Coca cola",
        price: "RD$20",
        unit: "2",
        img: ['https://ecologismos.com/wp-content/2011/10/Las-latas-de-Coca-Cola-seran-blancas-para-ayudar-a-proteger-a-los-osos-polares.jpg'],
        addToCart: false,
        supplier: 'Almacen Morillo',

    },
    {
        name: "Leche Kanny",
        price: "RD$20",
        unit: "2",
        img: ['https://static.wixstatic.com/media/ec8a03_557268e1065b4178ae3aa7c181f3492c~mv2.png/v1/fill/w_421,h_562,al_c,usm_0.66_1.00_0.01/ec8a03_557268e1065b4178ae3aa7c181f3492c~mv2.png'],
        addToCart: false,
        supplier: 'Almacen Morillo',

    },
    {
        name: "Nescafe",
        price: "RD$20",
        unit: "2",
        img: ['https://tiendaproalmex.com/94-large_default/cafe-soluble-nescafe-cafe-de-olla-caja-12-sticks-de-10-g-c-u.jpg'],
        addToCart: false,
        supplier: 'Almacen Morillo'
    }
]


export const ProductsList = ({navigation}) => {
 const dispatch = useDispatch();

 function searchProduct(prod) {
    Linking.openURL(`tel:${8098789902}`)

 }
 function setProduct(prod) {
    dispatch(setCurrentProduct(prod))
    navigation.navigate('FieldDetailsProduct', prod)
 }
  
  return (
    <View style={styles.container} >
    <ScrollView  showsVerticalScrollIndicator={false}>
        <View style={styles.list_items} >
            <TextInput
            style={styles.TextInput}
            placeholder="Buscar Producto"
            onChangeText={text => searchProduct(text)} value=""
            />
            {listProducts.map((prod, idx) => (
                <Pressable  key={idx + prod.name} onPress={() => setProduct(prod)} style={styles.item}>
                    <View>
                        <Text style={styles.title_item}>{prod.name}</Text>
                        <Text style={styles.info_item}>Unidades: {prod.unit}</Text>
                        <Text style={styles.info_item}>{prod.price}</Text>
                        <Text style={styles.info_item}>{prod.supplier}</Text>
                        <Text style={styles.info_item}>{prod.note}</Text>


                    </View>
                    <View style={styles.item_img}>
                        <Image style={styles.prod_img} source={{uri: prod.img[0]}}/>
                    </View>
                </Pressable>

            ))}
        </View>
    </ScrollView>

    <FAB
        style={styles.fab}
        small
        icon="plus"
        color='white'
        onPress={() => navigation.navigate('CreateProduct')}
/>
</View>          
  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        width: '100%',
        height: '100%',
    },
    item:{
        width: '98%',
        height: 115,
        zIndex: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        padding: 10,
        marginTop: 15,
        marginLeft: 5,
        marginRight: 5,
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

    list_items: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        zIndex: 0,
        marginBottom: 30
    },
    item_img: {
        width: '30%',
        display: 'flex',
    },
    prod_img:{
        width: '100%',
        height: '80%'
    },
    title_item:{
        fontSize: 16,
        width: '100%',
        fontWeight: 'bold',
        color: '#333',
        marginLeft: 5,
        marginRight: 5
    },
    info_item:{
        color: '#666',
        fontSize: 13,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 2
    },
    TextInput:{
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        paddingLeft: 15,
        borderWidth: 0.5,
        borderColor: '#666',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        zIndex: 1,
        borderRadius: 10,
    },
    icon:{
        position: 'absolute',
        bottom: 0, 
        zIndex: 2,
        width: 50,
        height: 50
    },
    fab: {
        position: 'absolute',
        backgroundColor: "#6F70FF",
        color: '#fff',
        margin: 18,
        right: 0,
        bottom: 0,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
      },
})

