import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput, Pressable, Platform} from 'react-native';
import {ScrollView } from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { changeNameExpensive, updateExpensive } from '../../actions/expensiveAction';
import DateTimePicker from '@react-native-community/datetimepicker'

export const ExpensiveDetails = ({navigation}) => {

  const [date, setDate] = useState(new Date())
  const [mode, setMode] = useState('date')
  const [show, setShow] = useState(false)
  const [datePicker, setDatePicker] = useState('DD-MM-YYYY')
  const [timePicker, setTimePicker] = useState('HH:MM')


  const onChange = (event, selectedDate, pastDate) => {
    const currentDate = selectedDate || date
    setShow(Platform.OS === "ios")
    setDate(currentDate)

    let tempDate = new Date(currentDate)
    let fDate = tempDate.getDate() + "/" + (tempDate.getMonth() + 1) + "/" + tempDate.getFullYear()
    let fTime = tempDate.getHours() + ":" + tempDate.getMinutes();
    setDatePicker(fDate)
    setTimePicker(fTime)
  }

  const showMode = (currentMode) => {
    setShow(true)
    setMode(currentMode)
  }

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
    dispatch(updateExpensive(data.id, data))
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
                    value={data?.expensive.currentExpensive?.note}
                    editable={editValue}
                    onChangeText={text => dispatch(changeNameExpensive("note", text)) }

                  />
                </View>
                <View style={styles.item}>
                  <View style={{flexDirection: 'row', justifyContent: "space-between"}}>
                    {
                      editValue ? 
                      <>
                        <View style={{width: "46%"}}>
                          <Pressable onPress={() => showMode("date")}>
                            <Text style={styles.info_title}>Fecha</Text>
                            <Text style={styles.TextInput} placeholder='DD-MM-YYYY'>{datePicker}</Text>
                          </Pressable>
                        </View>
                        <View style={{width: "45%"}}>
                          <Pressable onPress={() => showMode("time")}>
                            <Text style={styles.info_title}>Hora</Text>

                            <Text style={styles.TextInput} placeholder='HH:MM'>{timePicker}</Text>
                          </Pressable>
                        </View>
                      </>
                      :
                      <TextInput
                        style={styles.TextInput}
                        placeholder="Fecha de Gastos"
                        value={data?.expensive.currentExpensive.date}
                        editable={editValue}
                        onChangeText={text => dispatch(changeNameExpensive("date", text)) }
                      />
                    }
                  </View>
                  {show && (
                    <DateTimePicker
                      testID='dateTimePicker'
                      value={date}
                      mode={mode}
                      is24Hour={true}
                      display="default"
                      onChange={onChange}
                    
                    />
                  )

                  }

                  
                </View>
            </View>
            <View style={styles.btn_container}>
                <Button onPress={() => setEdit(true)} disabled={editValue} title="Editar"/>
                <Button onPress={() => saveInfo(data?.expensive.currentExpensive)} disabled={!editValue}  title="Guardar"/>
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
