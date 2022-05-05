import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Image, Pressable, TouchableHighlight } from 'react-native';
import { ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { FAB } from 'react-native-paper';
import { Ionicons } from '@expo/vector-icons';

export const TemplateItem = ({
    data,
    listText,
    methods,
    routes,
    navigation,
    images
}) => {
    const [itemDelete, setItemDelete] = useState(null)

    const dispatch = useDispatch();

    const createItem = () => {
        dispatch(methods.resetCurrentItem())
        navigation.navigate(routes.createItem)
    }

    function setterCurrentItem(prod, idx) {
        dispatch(methods.setCurrentItem(prod, idx))
        navigation.navigate(routes.details, idx)
    }

    function focusDelete(val) {
        setItemDelete(val)
    }
    function itemForDelete(id) {
        dispatch(methods.deleteItem(id))
    }

    return (
        <View style={styles.container} >
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.list_items} >
                    <TextInput
                        style={styles.TextInput}
                        placeholder={data.placeholderSearch}
                        onChangeText={text => dispatch(methods.setItemForDisplay(text))} value={data.searchItem}
                    />
                    {data.item.map((prod, idx) => (
                        <TouchableHighlight key={"View_" + prod.id} style={styles.item_touchable}>
                            <View style={ styles.container_item }>
                                {
                                    prod?.id == itemDelete ?
                                        <View style={styles.opt_item}>
                                            <Ionicons onPress={() => focusDelete()} name="close" size={22} color="#000" />
                                            <Ionicons onPress={() => itemForDelete(prod.id)} name="trash" size={22} color="#a20505" />

                                        </View>
                                        :
                                        <View></View>
                                }
                                <Pressable style={styles.item} underlayColor="white" onPress={() => setterCurrentItem(prod, idx)} onLongPress={() => focusDelete(prod.id)}>
                                    <View style={styles.item_info}>
                                        {listText(prod)}
                                    </View>
                                    <View style={styles.item_img}>
                                        <Image style={styles.prod_img} source={images} />
                                    </View>
                                </Pressable>
                            </View>
                        </TouchableHighlight>
                    ))
                    }
                </View>
            </ScrollView>

            <FAB
                style={styles.fab}
                small
                icon="plus"
                color='white'
                onPress={() => createItem()}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        width: '100%',
        height: '100%',
    },
    item_touchable: {
        width: '98%',
        marginTop: 10,
        marginLeft: 5,
        marginRight: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
    },
    container_item: {
        backgroundColor: "#fff",
        padding: 12,
    },
    item: {
        width: '100%',
        zIndex: 0,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    list_items: {
        flex: 1,
        alignItems: 'center',
        width: '100%',
        zIndex: 0,
        marginBottom: 30
    },
    item_img: {
        width: 100,
        maxWidth: 120,
        maxHeight: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    item_info: {
        maxWidth: '60%',
    },
    prod_img: {
        width: '70%',
        height: '80%'
    },
    title_item: {
        fontSize: 16,
        width: '100%',
        fontWeight: 'bold',
        color: '#333',
    },
    info_item: {
        color: '#666',
        fontSize: 12,
        marginTop: 2
    },
    TextInput: {
        backgroundColor: '#fff',
        width: '100%',
        padding: 10,
        paddingLeft: 15,
        borderWidth: 0.5,
        borderColor: '#666',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 1,
        zIndex: 1,
        borderRadius: 10,
    },
    fab: {
        position: 'absolute',
        backgroundColor: "#6F70FF",
        color: '#fff',
        margin: 18,
        right: 0,
        bottom: 0,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    opt_item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        width: '100%',
    }
})
