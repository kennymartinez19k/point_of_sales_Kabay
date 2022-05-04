import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentExpensive, getExpensive, resetExpensive, deleteExpensive, setExpensiveForDisplay } from '../../actions/expensiveAction';
import { TemplateItem } from '../../components/TemplateItems'

export const Expensive = ({ navigation }) => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getExpensive())
    }, [])
    const data = useSelector(state => state);

    const listText = (prod = {}) => {
        return (
            <>
                <Text style={styles.title_item}>{prod.name}</Text>
                <Text style={styles.info_item}>{prod.amount}</Text>
                <Text style={styles.info_item}>{prod.note} </Text>
                <Text style={styles.info_item}>{prod.date}</Text>
            </>
        )
    }

    return (
        <TemplateItem
            data={{
                item: data.expensive.expensiveForDisplay,
                searchItem: data.expensive.searchExpensive,
            }}
            listText={listText}
            methods={{
                resetCurrentItem: resetExpensive,
                setCurrentItem: setCurrentExpensive,
                deleteItem: deleteExpensive,
                setItemForDisplay: setExpensiveForDisplay
            }}
            routes={{
                createItem: "CreateExpensive",
                details: "ExpensiveDetails"
            }}
            navigation={navigation}
        />
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
        maxWidth: '60%'
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
