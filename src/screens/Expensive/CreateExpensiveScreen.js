import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { changeNameExpensive, createExpensive, resetExpensive, setCurrentExpensive } from '../../actions/expensiveAction';
import budget from '../../../assets/budget.png'

export const CreateExpensive = ({navigation}) => {
 const dispatch = useDispatch();
 const data = useSelector(state => state);

  const sendInfo = (data) => {
    dispatch(createExpensive(data))
    navigation.goBack()
  }  

 function Button(props) {
    const { onPress, title = 'Save' } = props;
    return (
      <Pressable style={styles.button} onPress={onPress}>
        <Text style={{color: '#fff'}}>{title}</Text>
      </Pressable>
    );
  }

  let expensive = {}
  return (
        <ScrollView style={styles.container} >
            <View style={styles.list_items}>
                <View style={styles.item}>
                   <Text  style={styles.info_title}>Nombre del Gasto {data.expensive.currentExpensive.name}</Text> 
                  <TextInput
                    onChangeText={text => dispatch(changeNameExpensive("name", text)) } value={data.expensive.currentExpensive.name}
                    style={styles.TextInput}
                    placeholder="Nombre del Producto"
                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Precio al Gastar {data.expensive.currentExpensive.amount}</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Precio"
                    onChangeText={text => dispatch(changeNameExpensive("amount", text)) } value={data.expensive.currentExpensive.amount}

                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Notas {data.expensive.currentExpensive.note}</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Descripcion"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                    onChangeText={text => dispatch(changeNameExpensive("note", text)) } value={data.expensive.currentExpensive.note}
                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.info_title}>Fecha {data.expensive.currentExpensive.date}</Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Fecha de Gastos"
                    onChangeText={text => dispatch(changeNameExpensive("date", text)) } value={data.expensive.currentExpensive.date}
                  />
                </View>
            </View>
            <View style={styles.btn_container}>
                <Button onPress={() => sendInfo(data.expensive.currentExpensive)} title="Crear"/>
            </View>
        </ScrollView>       
  )
}


const stylesTemplate = StyleSheet.create({
  item:{
    width: '98%',
    height: 105,
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
  item_img: {
      width: '30%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
  },
  prod_img:{
      width: '70%',
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
      fontSize: 12,
      marginLeft: 5,
      marginRight: 5,
      marginTop: 2
  },
})

const styles = StyleSheet.create({
    container:{
        padding: 10,
        backgroundColor: '#fff',
    },
    list_items: {
        marginBottom: 30
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
        color: '#666',
        fontWeight: 'bold',
        fontSize: 14,
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
