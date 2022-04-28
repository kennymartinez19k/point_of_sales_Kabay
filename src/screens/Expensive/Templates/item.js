import React from 'react'
import { Pressable, View, Text, Image, StyleSheet } from "react-native"
import budget from '../../../../assets/budget.png'
import { setCurrentExpensive, getExpensive } from '../../../actions/expensiveAction';
import {useDispatch, useSelector} from 'react-redux';

export const ItemTemplateFn = (prod, idx, navigation, dispatch) => {
    
    function setExpensive(product, idx) {
        dispatch(setCurrentExpensive(product , idx))
        navigation.navigate('ExpensiveDetails')
      }
    
    return (
       <Pressable  key={"view_" + prod.id} onPress={() => setExpensive(prod)} style={stylesTemplate.item}>
           <View>
               <Text style={stylesTemplate.title_item}>{prod.name}</Text>
               <Text style={stylesTemplate.info_item}>{prod.amount}</Text>
               <Text style={stylesTemplate.info_item}>{prod.date} {prod.hour}</Text>
               <Text style={stylesTemplate.info_item}>{prod.note}</Text>
           </View>
           <View style={stylesTemplate.item_img}>
               <Image style={stylesTemplate.prod_img} source={budget}/>
           </View>
       </Pressable>
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
