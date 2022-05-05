import services from '../services';
import { ACTION_ADD_USER, ACTION_CHANGE_PASSWORD, ACTION_CHANGE_USER, ACTION_SET_USER} from '../constants'

export function addUser() {
    // Lo que sea que quiera hacer Aqui
    return {
        type: ACTION_ADD_USER
    }
}

export function changeUser(user) {
    // Lo que sea que quiera hacer Aqui
    return {
        type: ACTION_CHANGE_USER,
        payload: user
    }
}

export function changePassword(password) {
    // Lo que sea que quiera hacer Aqui
    return {
        type: ACTION_CHANGE_PASSWORD,
        payload: password
    }
}

export function setCurrentUser(user) {
    // Lo que sea que quiera hacer Aqui
    return {
        type: ACTION_SET_USER,
        payload: user
    }
}


