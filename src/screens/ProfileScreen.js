import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, StatusBar, ScrollView, Button } from 'react-native';
import user_img from '../../assets/user.png'
import Svg, { Path } from 'react-native-svg'
import { useTranslation } from 'react-i18next';
import services from '../services';



function MainUser() {
  const { t } = useTranslation();

  return (
    <ScrollView style={styles.main}>
      <View style={styles.main_img}>
        <Image style={styles.img_profile} source={user_img} />
        <Text style={styles.title}>Juan Martinez</Text>
        <Text style={styles.subtitle}>(809) 980-8621</Text>
        <Svg
          height="50%"
          width="100%"
          viewBox="0 0 1440 320"
          style={styles.wave}
        >
          <Path
            fill="#4054F5"
            d="M0,96L48,112C96,128,192,160,288,186.7C384
                  ,213,480,235,576,213.3C672,192,768,128,864,
                  128C960,128,1056,192,1152,208C1248,224,1344,192,
                  1392,176L1440,160L1440,0L1392,0C1344,0,1248,0,
                  1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,
                  384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </Svg>

      </View>
      <View style={styles.info_user}>

        <View style={styles.item_info}>
          <Text style={styles.item_info_text}>{t('profile:myProducts')}</Text>
        </View>
        <View style={styles.item_info}>
          <Text style={styles.item_info_text}>{t('profile:about')}</Text>
        </View>
        <View style={styles.item_info}>
          <Text style={styles.item_info_text}>{t('profile:configuration')}</Text>
        </View>
        <View style={styles.item_info}>
          <Text style={styles.item_info_text}>{t('profile:close')}</Text>
        </View>
      </View>
    </ScrollView>
  )
}

export default function Profile() {
  const [productView, setProductView] = useState(null)

  const productTemplate = (product) => {
    return (
      <View key={product.id}>
        <Text>{product.name}</Text>
      </View>
    )
  }
  async function getProducts() {
    let productsTemplate = await services.product.getAll(productTemplate)
    setProductView(productsTemplate)
  }

  async function getOnlyProduct() {
    let product = await services.product.get(1, productTemplate)
    setProductView(product)
  }

  async function createProduct() {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    let response = await services.product.create({
      categoryId: 1,
      supplierId: 1,
      name: "Fruta " + randomNumber,
      barcode: "Fruta " + randomNumber,
      description: "Mi Fruta" + randomNumber,
      image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/8E59/production/_122514463_fr.jpg",
      sellPrice: 30,
      buyPrice: 20,
      productStock: 50,
      productWeight: 2.2,
      additionalAttributes: [
        {
          name: "Color",
          value: "Color " + randomNumber
        }
      ]
    })
    console.log(response)
    alert("Creado el producto Fruta " + randomNumber)
  }

  async function updateProduct() {
    const randomNumber = Math.floor(Math.random() * 100) + 1
    let response = await services.product.update(1, {
      id: 1,
      categoryId: 1,
      supplierId: 1,
      name: "Fruta " + randomNumber,
      barcode: "Fruta " + randomNumber,
      description: "Mi Fruta" + randomNumber,
      image: "https://ichef.bbci.co.uk/news/640/cpsprodpb/8E59/production/_122514463_fr.jpg",
      sellPrice: 30,
      buyPrice: 20,
      productStock: 50,
      productWeight: 2.2,
      additionalAttributes: [
        {
          name: "Color",
          value: "Color " + randomNumber
        },
        {
          name: "Genero",
          value: "Genero " + randomNumber
        },
      ]
    })
    alert("Se actualizo el producto ")
    console.log(response)
  }


  async function deleteProduct() {
    let response = await services.product.delete(3)
    alert("Se borro el producto ")
    console.log(response)
  }



  return (
    <View style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#fff"
      />
      <MainUser />
      <Text>Inicio Product View</Text>
      {productView}
      <Text>Fin Product View</Text>
      <Button title='Product List' onPress={async () => await getProducts()} />
      <Button title='Only Product' onPress={async () => await getOnlyProduct()} />
      <Button title='Crear Product' onPress={async () => await createProduct()} />
      <Button title='Update First Product' onPress={async () => await updateProduct()} />
      <Button title='Delete Product' onPress={async () => await deleteProduct()} />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  img_profile: {
    width: '20%',
    height: '31%'
  },
  main: {
    width: '100%'
  },
  title: {
    fontSize: 18,
    marginTop: 10,
    fontWeight: '600',
    color: '#fff'
  },
  subtitle: {
    fontSize: 14,
    color: 'gray',
    marginTop: 5,
    color: '#fff'

  },
  titleHelper: {
    fontSize: 13,
    color: '#a9a9a9',
    marginTop: 40,
    marginBottom: 10
  },
  TextInput: {
    width: '80%',
    height: 50,
    padding: 10,
    paddingStart: 20,
    backgroundColor: '#fff',
    color: '#333',
    marginTop: 15,
    borderWidth: 1,
    borderColor: '#ccc'

  },
  logo: {
    marginTop: 20,
    width: 200,
    height: 50,
    borderColor: '#000',
    borderWidth: 5,

  },
  button: {
    padding: 10,
    borderRadius: 10,
    width: 200,
    marginTop: 20,
    backgroundColor: '#6F70FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  main_img: {
    position: 'relative',
    backgroundColor: '#000',
    height: 250,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#4054F5',
    paddingTop: 20,

  },
  wave: {
    position: 'absolute',
    bottom: '-35%'
  },
  info_user: {
    marginTop: 40,
    padding: 20,
  },
  item_info: {
    paddingTop: 20,
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#dbdbdb'
  },
  item_info_text: {
    color: '#666',
    fontSize: 14
  },

  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },


});