import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable} from 'react-native';
import {ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { changeNameExpensive, setCurrentExpensive, updateExpensive } from '../../actions/expensiveAction';
import { useRoute } from '@react-navigation/native';


export const ExpensiveDetails = ({navigation}) => {
 const dispatch = useDispatch();
 const route = useRoute()
 const data = useSelector(state => state);
 const [editValue, setEditValue] = useState(false)

 function Button(props) {
    const { onPress, title = 'Save', disabled } = props;
    return (
      <Pressable  disabled={disabled} style={disabled ? styles.button_disabled : styles.button} onPress={onPress}>
        <Text style={{color: "#fff"}}>{title}</Text>
      </Pressable>
    );
  }

  const saveInfo = (data) => {
    dispatch(updateExpensive(data.id, data))
    navigation.goBack()
    setEditValue(false)
  }

//   const ItemTemplateFn = (prod, idx) => {
//     function setExpensive(product, idx) {
//       dispatch(setCurrentExpensive(product , idx))
//       navigation.navigate('ExpensiveDetails')
//     }

//     return (
//        <Pressable  key={"view_" + prod.id} onPress={() => setExpensive(prod)} style={stylesTemplate.item}>
//            <View>
//                <Text style={stylesTemplate.title_item}>{prod.name}</Text>
//                <Text style={stylesTemplate.info_item}>{prod.amount}</Text>
//                <Text style={stylesTemplate.info_item}>{prod.date} {prod.hour}</Text>
//                <Text style={stylesTemplate.info_item}>{prod.note}</Text>
//            </View>
//            <View style={stylesTemplate.item_img}>
//                <Image style={stylesTemplate.prod_img} source={budget}/>
//            </View>
//        </Pressable>
//     )
// }

// function setExpensive(prod) {
//   dispatch(setCurrentExpensive(prod ))
//   navigation.navigate('ExpensiveDetails')
// }
  

  return (
        <ScrollView style={styles.container} >
            <View style={styles.list_items}>
                <View style={styles.item}>
                   <Text style={styles.info_title}>Nombre del Gasto</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Nombre del Producto"
                    value={data?.expensive.currentExpensive.name}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameExpensive("name", text)) }

                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Precio al Gastar</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Precio"
                    value={data?.expensive.currentExpensive.amount}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameExpensive("amount", text)) }


                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Notas</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Descripcion"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                    value={data?.expensive.currentExpensive?.note}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameExpensive("note", text)) }


                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.info_title}>Fecha</Text>
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Fecha de Gastos"
                    value={data?.expensive.currentExpensive.date}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameExpensive("date", text)) }


                  />
                </View>
            </View>
            <View style={styles.btn_container}>
                <Button onPress={() => setEditValue(true)} disabled={editValue} title="Editar"/>
                <Button onPress={() => saveInfo(data?.expensive.currentExpensive)} disabled={!editValue}  title="Guardar"/>
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
        justifyContent: 'space-around',
        flexDirection: 'row',
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
    button_disabled:{
      padding: 10,
      borderRadius: 10,
      width: 150,
      marginTop: 20,
      backgroundColor: '#6768e966',
      justifyContent: 'center',
      alignItems: 'center',
      color: '#fff'
  },

    

})
