import {  ACTION_GET_EXPENSIVE, ACTION_INSERT_EXPENSIVE, ACTION_UPDATE_EXPENSIVE, ACTION_DELETE_EXPENSIVE, ACTION_SET_CURRENT_EXPENSIVE, ACTION_GET_CURRENT_EXPENSIVE, ACTION_CHANGE_EXPENSIVE, ACTION_RESET_EXPENSIVE, ACTION_CHANGE_EXPENSIVE_FOR_DISPLAY } from '../constants'
const INITIAL_STATE = {
   expensive: [],
   expensiveForDisplay: [],
   searchExpensive: "",
   currentIndex: null,
   currentExpensive: {
    id: null,
    name: null,
    amount: null,
    note: null,
    date: null,
  }
};

const expensiveReducer = (state = INITIAL_STATE, action) => {
    const { expensive } = state
    switch (action.type) {
     
      case ACTION_GET_EXPENSIVE:
          return {...state, expensive: [...action.payload], expensiveForDisplay: [...action.payload] };
      
      case ACTION_INSERT_EXPENSIVE:
        let insertExpensive = [...state.expensive] // Nota> Redux no funciona correctamente si usas el mismo campo products, sino que lo recomendado es que copies el arreglo o el valor y luego lo devuelvas. Por eso la variable currentProducts
        insertExpensive.push({...action.payload})
        console.log(insertExpensive, "?OOOOOOOOOOOOOOOOOOOOOO")
        let currentExpensive = {
            name: null,
            amount: null,
            note: null,
            date: null,
        }
        return {...state, currentExpensive: currentExpensive, expensive: insertExpensive, expensiveForDisplay: insertExpensive  };
       
       case ACTION_RESET_EXPENSIVE:
        return {...state, currentExpensive: {
            name: null,
            amount: null,
            note: null,
            date: null,
        }};

       case ACTION_UPDATE_EXPENSIVE:
        let updateExpensive = [...state.expensive]
        updateExpensive[state.currentIndex] = {...action.payload}
        return {...state, expensive: updateExpensive, expensiveForDisplay: updateExpensive };
            
        case ACTION_DELETE_EXPENSIVE:
                let deleteExpensive = [...state.expensive]
                console.log(state.expensive)
                let viewIndex = deleteExpensive.findIndex(x => x.id == action.payload)
                deleteExpensive.splice(viewIndex, 1)
                return {...state, expensive: deleteExpensive, expensiveForDisplay: deleteExpensive };
        case ACTION_SET_CURRENT_EXPENSIVE: 
            return {...state, currentExpensive: action.payload.expensive, currentIndex: action.payload.idx };
        case ACTION_GET_CURRENT_EXPENSIVE:
            let currentExpensiveX = action.payload 
            return {...state, currentExpensive: currentExpensiveX };
        case ACTION_CHANGE_EXPENSIVE:
            let currentExpensiveZ = {...state.currentExpensive} 
            currentExpensiveZ[action.payload.key] = action.payload.value
            return {...state, currentExpensive: currentExpensiveZ};
    
        case ACTION_CHANGE_EXPENSIVE_FOR_DISPLAY: 
            let text = action.payload
            let expensive = [...state.expensive]
            let expForDisplay
            text.length > 0 ? expForDisplay = expensive.filter(exp => exp.name.toUpperCase().includes(text.toUpperCase())) :
            expForDisplay = expensive
            return {...state, expensiveForDisplay: expForDisplay, searchExpensive: text};
      default:
        return state
    }
};
 
export default expensiveReducer;