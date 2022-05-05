import React from 'react'
import { StyleSheet, Text, View, TextInput , Pressable, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { changeNameProvider, createProvider } from '../../actions/providerAction';
import DatePicker from 'react-native-datepicker';

export const CreateProvider = ({navigation}) => {
 const dispatch = useDispatch();
 const data = useSelector(state => state);

 console.log(Object.keys(data.provider.currentProvider))

  const sendInfo = (val) => {
    val.companyId = data.user.currentUser.companyId
    console.log(val.companyId, "llllllllllllllllllllllllll")
    dispatch(createProvider(val))
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
  return (
        <ScrollView style={styles.container} >
            <View style={styles.list_items}>
                <View style={styles.item}>
                   <Text  style={styles.info_title}>Nombre del Proveedor</Text> 
                  <TextInput
                    onChangeText={text => dispatch(changeNameProvider("name", text)) } value={data.provider.currentProvider.name}
                    style={styles.TextInput}
                    placeholder="Nombre del Producto"
                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Telefono</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Precio"
                    onChangeText={text => dispatch(changeNameProvider("phone", text)) } value={data.provider.currentProvider.amount}
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
                    onChangeText={text => dispatch(changeNameProvider("cell", text)) } value={data.provider.currentProvider.note}
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
                    onChangeText={text => dispatch(changeNameProvider("email", text)) } value={data.provider.currentProvider.note}
                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Dirección</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Direccion"
                    multiline
                    numberOfLines={4}
                    textAlignVertical="top"
                    onChangeText={text => dispatch(changeNameProvider("address", text)) } value={data.provider.currentProvider.note}
                  />
                </View>
            </View>
            <View style={styles.btn_container}>
                <Button onPress={() => sendInfo(data.provider.currentProvider)} title="Crear"/>
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

  datePickerStyle: {
    width: 170,
    marginTop: 10,
  },

})
