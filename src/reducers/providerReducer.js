import { ACTION_GET_PROVIDER, ACTION_INSERT_PROVIDER, ACTION_UPDATE_PROVIDER, ACTION_DELETE_PROVIDER, ACTION_SET_CURRENT_PROVIDER, ACTION_GET_CURRENT_PROVIDER, ACTION_CHANGE_PROVIDER, ACTION_RESET_PROVIDER, ACTION_CHANGE_PROVIDER_FOR_DISPLAY } from '../constants'

const INITIAL_STATE = {
   provider: [],
   providerForDisplay: [],
   searchProvider: "",
   currentIndex: null,
   currentProvider: {
    id: null,
    name: null,
    phone: null,
    cell: null,
    email: null,
    address: null
  }
};

const providerReducer = (state = INITIAL_STATE, action) => {
    const { provider } = state
    switch (action.type) {
     
      case ACTION_GET_PROVIDER:
          return {...state, provider: [...action.payload], providerForDisplay: [...action.payload] };
      
      case ACTION_INSERT_PROVIDER:
        let insertProvider = [...state.provider] // Nota> Redux no funciona correctamente si usas el mismo campo products, sino que lo recomendado es que copies el arreglo o el valor y luego lo devuelvas. Por eso la variable currentProducts
        insertProvider.push({...action.payload})
        let currentProvider = {
            name: null,
            amount: null,
            note: null,
            date: null,
        }
        return {...state, currentProvider: currentProvider, provider: insertProvider, providerForDisplay: insertProvider  };
       
       case ACTION_RESET_PROVIDER:
        return {...state, currentProvider: {
            id: null,
            name: null,
            phone: null,
            cell: null,
            email: null,
            address: null
        }};

       case ACTION_UPDATE_PROVIDER:
        let updateProvider = [...state.provider]
        updateProvider[state.currentIndex] = {...action.payload}
        return {...state, provider: updateProvider, providerForDisplay: updateProvider };
            
        case ACTION_DELETE_PROVIDER:
                let deleteProvider = [...state.provider]
                let viewIndex = deleteProvider.findIndex(x => x.id == action.payload)
                deleteProvider.splice(viewIndex, 1)
                return {...state, provider: deleteProvider, providerForDisplay: deleteProvider };
        case ACTION_SET_CURRENT_PROVIDER: 
            return {...state, currentProvider: action.payload.provider, currentIndex: action.payload.idx };
        case ACTION_GET_CURRENT_PROVIDER:
            let currentProviderX = action.payload 
            return {...state, currentProvider: currentProviderX };
        case ACTION_CHANGE_PROVIDER:
            let currentProviderZ = {...state.currentProvider} 
            currentProviderZ[action.payload.key] = action.payload.value
            return {...state, currentProvider: currentProviderZ};
    
        case ACTION_CHANGE_PROVIDER_FOR_DISPLAY: 
            let text = action.payload
            let provider = [...state.provider]
            let expForDisplay
            text.length > 0 ? expForDisplay = provider.filter(exp => exp.name.toUpperCase().includes(text.toUpperCase())) :
            expForDisplay = provider
            return {...state, providerForDisplay: expForDisplay, searchProvider: text};
      default:
        return state
    }
};
 
export default providerReducer;