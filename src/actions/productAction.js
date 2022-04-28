import services from '../services';
import {  ACTION_GET_PRODUCTS, ACTION_INSERT_PRODUCT, ACTION_GET_PRODUCT, ACTION_UPDATE_PRODUCT, ACTION_DELETE_PRODUCT, ACTION_RESET_PRODUCT, ACTION_SET_CURRENT_PRODUCT, ACTION_GET_CURRENT_PRODUCT} from '../constants'

export function resetProducts(data = []) {
    return {
        type: ACTION_RESET_PRODUCT,
        payload: data
    }
}

export const getProducts = (templateFn, config = null) => {
    return async dispatch => {
        const res = await services.product.getAll(templateFn, config)
        dispatch({ type: ACTION_GET_PRODUCTS, payload: res});
    };
};

export const getProduct = (id, templateFn, config = null) => {
    return async dispatch => {
        const res = await services.product.get(id, templateFn, config)
        dispatch({ type: ACTION_GET_PRODUCT, payload: res});
    };
};

export const createProduct = (data, templateFn, config = null) => {
    return async dispatch => {
        const response = await services.product.create(data, config)
        dispatch({ type: ACTION_INSERT_PRODUCT, payload: templateFn({...data, id: response.data})});
    };
};

export const updateProduct = (id, data, templateFn, index, config = null) => {
    return async dispatch => {
        await services.product.update(id, data, config)
        dispatch({ type: ACTION_UPDATE_PRODUCT, payload: {index: index, element: templateFn({...data}, index)}});
    };
};

export const deleteProduct = (id, index, config = null) => {
    return async dispatch => {
        await services.product.delete(id, config)
        dispatch({ type: ACTION_DELETE_PRODUCT, payload: id});
    };
};
export const setCurrentProduct = (product) => {
    return async dispatch => {
        dispatch({type:  ACTION_SET_CURRENT_PRODUCT , payload: product})
    }
};
export const getCurrentProduct = () => {
    return async dispatch => {
        let res = await services.product.getProduct()
        dispatch({type:  ACTION_GET_CURRENT_PRODUCT , payload: res})
    }
};