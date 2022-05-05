import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Platform} from 'react-native';
import {ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { changeNameProvider, updateProvider } from '../../actions/providerAction';

export const ProviderDetails = ({navigation}) => {

 const dispatch = useDispatch();
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
    dispatch(updateProvider(data.id, data))
    navigation.goBack()
    setEditValue(false)
  }
  const setEdit = () => {
    setEditValue(true)
  }

  return (
        <ScrollView style={styles.container} >
            <View style={styles.list_items}>
                <View style={styles.item}>
                   <Text style={styles.info_title}>Nombre del Proveedor</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Nombre del Proveedor"
                    value={data?.provider.currentProvider.name}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameProvider("name", text)) }

                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Telefono</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Telefono"
                    value={data?.provider.currentProvider.phone}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameProvider("phone", text)) }
                    keyboardType='numeric'

                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Celular</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Celular"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                    value={data?.provider.currentProvider.cell}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameProvider("cell", text)) }

                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Email</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Email"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                    value={data?.provider.currentProvider.email}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameProvider("email", text)) }
                  />
                </View>
                
                <View style={styles.item}>
                 <Text style={styles.info_title}>Dirección</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Address"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                    value={data?.provider.currentProvider.address}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameProvider("address", text)) }
                  />
                </View>
            </View>
            <View style={styles.btn_container}>
                <Button onPress={() => setEdit(true)} disabled={editValue} title="Editar"/>
                <Button onPress={() => saveInfo(data?.provider.currentProvider)} disabled={!editValue}  title="Guardar"/>
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
  
  datePickerStyle: {
    width: 170,
    marginTop: 10,
  },
    

})
