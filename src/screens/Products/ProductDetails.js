import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, TextInput, Image , Pressable, TouchableOpacity} from 'react-native';
import img from '../../../assets/Products/box-hershey.jpg'
import prod1 from '../../../assets/Products/prod1.jpeg'
import prod2 from '../../../assets/Products/prod2.png'
import prod3 from '../../../assets/Products/prod3.png'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentProduct, getProduct } from '../../actions/productAction';


function Button(props) {
  const { onPress, title = 'Save' } = props;
  return (
    <Pressable style={styles.button} onPress={onPress}>
      <Text style={styles.text_btn}>{title}</Text>
    </Pressable>
  );
}
export const ProductDetails = () => {

  const [MainImg, setMainImg] = useState(prod1)
  const dispatch = useDispatch();
  
  const data = useSelector(state => state);
  const route = useRoute()
  return (
      <View style={styles.container}>

        <Image style={styles.img} source={MainImg}/>
        <View style={styles.images_info}>
        <TouchableOpacity style={styles.container_mini_img}  onPress={() => dispatch(getCurrentProduct())}><Image style={styles.mini_img} source={prod1}/></TouchableOpacity>
        <TouchableOpacity style={styles.container_mini_img}  onPress={() => setMainImg(prod2)}><Image style={styles.mini_img} source={prod2}/></TouchableOpacity>
        <TouchableOpacity style={styles.container_mini_img}  onPress={() => setMainImg(prod3)}><Image style={styles.mini_img} source={prod3}/></TouchableOpacity>
        <TouchableOpacity style={styles.container_mini_img}  onPress={() =>setMainImg(img)}><Image style={styles.mini_img} source={prod2}/></TouchableOpacity>
        <TouchableOpacity style={styles.container_mini_img}  onPress={() =>setMainImg(img)}><Image style={styles.mini_img} source={prod2}/></TouchableOpacity>

        </View>
        <View style={styles.card_info}>
          <View style={styles.options_cart}>
            <Text style={styles.opt_title}>Agregue al Carrito Ahora</Text>
             {
               data?.product?.currentProduct?.addToCart ?
               <Ionicons
                name='cart'
                size={22}
                color="tomato"
                />
              : 
              <Ionicons
                name='cart'
                size={22}
                color="#000"
              />
           

             }
          </View>
          <Text style={styles.title}>{data?.product?.currentProduct?.name}</Text>
          <Text style={styles.subtitle}>{data?.product?.currentProduct?.price}</Text>
          <Text style={styles.subtitle}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</Text>
          <View style={styles.btn}>
            <Button
              title="Agregar al Carrito"
              // onPress={() => alert('Agregue al carrito')}
              
            />
            <Button
              title="Comprar Ahora"
              onPress={() =>  alert('Realize la compra')}
            />
          </View>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container:{
    height: '100%',
    backgroundColor: '#000',
  },
  container:{
    height: '100%',
    width: '100%',
  },
  images_info:{
    height: 100,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#fff'
    
  },
  img:{
    width: '100%',
    height: '40%',
    marginTop: 25
  },
  mini_img:{
    width: '100%',
    height: '100%',
    backgroundColor: '#000'

  },
  title:{
    fontSize: 20,
    marginTop: 20
  },
  card_info:{
    padding: 20,
    height: '100%',
    borderTopStartRadius: 30,
    borderTopEndRadius: 30,
    position: 'relative',
    top: -10,
    backgroundColor: '#fff',
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 7,
    },
    shadowOpacity: 0.93,
    shadowRadius: 9.51,
    elevation: 15,
  },
  btn:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  button:{
    padding: 10,
    borderRadius: 10,
    width: 130,
    marginTop: 20,
    backgroundColor: '#6F70FF',
    justifyContent: 'center',
    alignItems: 'center'
  }, 
  text_btn:{
    color: '#fff',
    fontSize: 12
  },
  container_mini_img:{
    width: '15%',
    height: '50%',
    shadowColor: "#000",
    shadowOffset:{
    width: 0,
    height: 7,
    },
    shadowOpacity: 0.93,
    shadowRadius: 9.51,
    elevation: 2,
  },
  options_cart:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  opt_title:{
    fontSize: 12
  },
  
})
