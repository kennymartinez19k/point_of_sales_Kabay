import services from '../services';
import { ACTION_GET_PROVIDER, ACTION_INSERT_PROVIDER, ACTION_UPDATE_PROVIDER, ACTION_DELETE_PROVIDER, ACTION_SET_CURRENT_PROVIDER, ACTION_GET_CURRENT_PROVIDER, ACTION_CHANGE_PROVIDER, ACTION_RESET_PROVIDER, ACTION_CHANGE_PROVIDER_FOR_DISPLAY } from '../constants'


export const getProvider = (templateFn, config = null) => {
    return async dispatch => {
        const res = await services.provider.getAll(templateFn, config)
        dispatch({ type: ACTION_GET_PROVIDER, payload: res });
    };
};

export const createProvider = (data, config = null) => {
    console.log(data, 'data')
    return async dispatch => {
        try {
            let response = await services.provider.create(data, config)
            dispatch({ type: ACTION_INSERT_PROVIDER, payload: { ...data, id: response.data } });
        } catch (err) {
            alert('no se pudo crear')
        }

    };
};


export const updateProvider = (id, data, config = null) => {
    return async dispatch => {
        await services.provider.update(id, data, config)
        dispatch({ type: ACTION_UPDATE_PROVIDER, payload: data });
    };
};

export const deleteProvider = (id, config = null) => {
    return async dispatch => {
        await services.provider.delete(id, config)
        dispatch({ type: ACTION_DELETE_PROVIDER, payload: id });
    };
};
export const setCurrentProvider = (provider, idx) => {
    return async dispatch => {
        dispatch({ type: ACTION_SET_CURRENT_PROVIDER, payload: { provider, idx } })
    }
};
export const resetProvider = () => {
    return async dispatch => {
        dispatch({ type: ACTION_RESET_PROVIDER, payload: null })
    }
};
export const getCurrentProvider = () => {
    return async dispatch => {
        dispatch({ type: ACTION_GET_CURRENT_PROVIDER, payload: action.payload })
    }
};
export function changeNameProvider(key, value) {
    return {
        type: ACTION_CHANGE_PROVIDER,
        payload: {
            key: key,
            value: value
        }
    }
}

export const setProviderForDisplay = (text) => {
    return {
        type: ACTION_CHANGE_PROVIDER_FOR_DISPLAY,
        payload: text
    }
};