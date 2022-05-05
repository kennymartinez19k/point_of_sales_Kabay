import { ACTION_ADD_USER, ACTION_CHANGE_PASSWORD, ACTION_CHANGE_USER, ACTION_SET_USER } from '../constants'
const INITIAL_STATE = {
    users: ["hola", "adios"],
    username: "Emy Saul",
    password: null,
    currentUser: null
};
 
const userReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case ACTION_ADD_USER:
           const myUsers = [...state.users]
           myUsers.push(state.username)
          return {...state, users: myUsers}

        case ACTION_CHANGE_USER:
            return {...state, username: action.payload}

        case ACTION_CHANGE_PASSWORD:
            return {...state, password: action.payload}
        case ACTION_SET_USER:
            return {...state, currentUser: action.payload}
      default:
        return state
    }
};
 
export default userReducer;