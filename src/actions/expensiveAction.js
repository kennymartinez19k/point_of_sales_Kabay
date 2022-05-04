import services from '../services';
import { ACTION_GET_EXPENSIVE, ACTION_INSERT_EXPENSIVE, ACTION_UPDATE_EXPENSIVE, ACTION_DELETE_EXPENSIVE, ACTION_SET_CURRENT_EXPENSIVE, ACTION_GET_CURRENT_EXPENSIVE, ACTION_CHANGE_EXPENSIVE, ACTION_RESET_EXPENSIVE, ACTION_CHANGE_EXPENSIVE_FOR_DISPLAY } from '../constants'


export const getExpensive = (templateFn, config = null) => {
    return async dispatch => {
        const res = await services.expensive.getAll(templateFn, config)
        dispatch({ type: ACTION_GET_EXPENSIVE, payload: res });
    };
};

export const createExpensive = (data, config = null) => {
    return async dispatch => {
        try {
            let response = await services.expensive.create(data, config)
            dispatch({ type: ACTION_INSERT_EXPENSIVE, payload: { ...data, id: response.data } });
        } catch (err) {
            alert('no se pudo crear')
        }

    };
};


export const updateExpensive = (id, data, config = null) => {
    return async dispatch => {
        await services.expensive.update(id, data, config)
        dispatch({ type: ACTION_UPDATE_EXPENSIVE, payload: data });
    };
};

export const deleteExpensive = (id, config = null) => {
    return async dispatch => {
        await services.expensive.delete(id, config)
        dispatch({ type: ACTION_DELETE_EXPENSIVE, payload: id });
    };
};
export const setCurrentExpensive = (expensive, idx) => {
    return async dispatch => {
        dispatch({ type: ACTION_SET_CURRENT_EXPENSIVE, payload: { expensive, idx } })
    }
};
export const resetExpensive = () => {
    return async dispatch => {
        dispatch({ type: ACTION_RESET_EXPENSIVE, payload: null })
    }
};
export const getCurrentExpensive = () => {
    return async dispatch => {
        dispatch({ type: ACTION_GET_CURRENT_EXPENSIVE, payload: action.payload })
    }
};
export function changeNameExpensive(key, value) {
    return {
        type: ACTION_CHANGE_EXPENSIVE,
        payload: {
            key: key,
            value: value
        }
    }
}

export const setExpensiveForDisplay = (text) => {
    return {
        type: ACTION_CHANGE_EXPENSIVE_FOR_DISPLAY,
        payload: text
    }
};