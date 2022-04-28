import React from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';
import {ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

export const FieldDetailsProduct = ({navigation}) => {
 const dispatch = useDispatch();
 const imd = 'https://tiendaproalmex.com/94-large_default/cafe-soluble-nescafe-cafe-de-olla-caja-12-sticks-de-10-g-c-u.jpg'
 const data = useSelector(state => state);
 function searchProduct(prod) {
     console.log(prod)
 }

 function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={{color: "#fff"}}>{title}</Text>
      </Pressable>
    );
  }
  
 
  
  return (
        <ScrollView style={styles.container} >
            <View style={styles.list_items}>
                <View style={styles.item}>
                   <Text style={styles.info_title}>Nombre del Producto</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Nombre del Producto"
                    value={data?.product?.currentProduct?.name}
                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Precio del Producto</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Precio"
                    value={data?.product?.currentProduct?.price}

                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Descripcion del Producto</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Descripcion"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.info_title}>Unidad</Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Unidad"
                    keyboardType='numeric'
                    value={data?.product?.currentProduct?.unit}
                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.info_title}>Suplidor</Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Suplidor"
                    value={data?.product?.currentProduct?.supplier}
                  />
                </View>

               

            </View>
            <View style={styles.btn_container}>
                <Button title="Editar"/>
            </View>
        </ScrollView>   

  )
}

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#fff',
    },
    list_items: {
        marginBottom: 10
    },
    item:{
        width: '100%',
        zIndex: 0,
        padding: 2,
        marginTop: 20,
        backgroundColor: '#fff',
    },
  
    TextInput:{
        backgroundColor: '#fff',
        width: '100%',
        borderRadius: 5,
        padding: 10,
        borderWidth: 0.7,
        borderColor: '#666',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        zIndex: 1
    },
    info_title:{
        color: '#7c7a7a',
        fontSize: 14,
        fontWeight: 'bold',
        marginLeft: 2,
        marginBottom: 5
    },
    images:{
        width: 20,
        height: 20
    },
    btn_container:{
        display: 'flex',
        alignItems: 'flex-end',
        marginBottom: 20,
    },
    button:{
        padding: 10,
        borderRadius: 10,
        width: 150,
        marginTop: 20,
        backgroundColor: '#6F70FF',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff'
    },

    

})
