import React from 'react'
import { StyleSheet, Text, View, TextInput , Pressable, ScrollView} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { changeNameExpensive, createExpensive } from '../../actions/expensiveAction';
import DatePicker from 'react-native-datepicker';
import moment from 'moment'


export const CreateExpensive = ({navigation}) => {
 const date = moment(new Date()).format("DD-MM-YYYY")

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
  return (
        <ScrollView style={styles.container} >
            <View style={styles.list_items}>
                <View style={styles.item}>
                   <Text  style={styles.info_title}>Nombre del Gasto</Text> 
                  <TextInput
                    onChangeText={text => dispatch(changeNameExpensive("name", text)) } value={data.expensive.currentExpensive.name}
                    style={styles.TextInput}
                    placeholder="Nombre del Producto"
                  />
                </View>
                <View style={styles.item}>
                 <Text style={styles.info_title}>Precio al Gastar</Text> 
                  <TextInput
                    style={styles.TextInput}
                    placeholder="Precio"
                    onChangeText={text => dispatch(changeNameExpensive("amount", text)) } value={data.expensive.currentExpensive.amount}
                    keyboardType='numeric'
                    
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
                    onChangeText={text => dispatch(changeNameExpensive("note", text)) } value={data.expensive.currentExpensive.note}
                  />
                </View>
                <View style={styles.item}>
                  <Text style={styles.info_title}>Fecha</Text>
                  <DatePicker
                  style={styles.datePickerStyle}
                  date={data.expensive.currentExpensive.date ? data.expensive.currentExpensive.date : date} //initial date from state
                  mode="date"
                  placeholder="Seleccione una fecha"
                  format="DD-MM-YYYY"
                  confirmBtnText="Confirmar"
                  cancelBtnText="Cancelar"
                  customStyles={{
                    dateIcon: {
                      position: 'absolute',
                      left: 0,
                      top: 4,
                      marginLeft: 0,
                    },
                    dateInput: {
                      marginLeft: 36,
                    },
                  }}
                  onDateChange={(date) => {
                    dispatch(changeNameExpensive("date", date));
                  }}
                />
                </View>
              
                
            </View>
            <View style={styles.btn_container}>
                <Button onPress={() => sendInfo(data.expensive.currentExpensive)} title="Crear"/>
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
