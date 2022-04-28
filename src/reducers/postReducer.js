import {  ACTION_GET_PRODUCTS, ACTION_INSERT_PRODUCT, ACTION_GET_PRODUCT, ACTION_UPDATE_PRODUCT, ACTION_DELETE_PRODUCT, ACTION_RESET_PRODUCT, ACTION_SET_CURRENT_PRODUCT, ACTION_ADD_USER, ACTION_CHANGE_PASSWORD, ACTION_GET_CURRENT_PRODUCT, ACTION_CHANGE_USER } from '../constants'
const INITIAL_STATE = {
    posts: [],
    currentPosts: null,
};
 
const productReducer = (state = INITIAL_STATE, action) => {
    const { products } = state
    switch (action.type) {
     
      case ACTION_GET_POSTS:
          return {...state, products: [...action.payload] };
      
      case ACTION_GET_POST:
            return {...state, currentProduct: action.payload };
      
      case ACTION_INSERT_POST:
        let insertProducts = [...products] // Nota> Redux no funciona correctamente si usas el mismo campo products, sino que lo recomendado es que copies el arreglo o el valor y luego lo devuelvas. Por eso la variable currentProducts
        insertProducts.push({...action.payload})
        return {...state, products: insertProducts };

       case ACTION_UPDATE_POST:
            let updateProducts = [...products]
            updateProducts[action.payload.index] = {...action.payload.element}
            return {...state, products: updateProducts };
        case ACTION_DELETE_POST:
                let deleteProducts = [...products]
                let viewIndex = deleteProducts.findIndex(x => x.key == `View_${action.payload}`)
                deleteProducts.splice(viewIndex, 1)
                return {...state, products: deleteProducts };
        case ACTION_SET_CURRENT_POST: 
            let product = action.payload // Nota> Redux no funciona correctamente si usas el mismo campo products, sino que lo recomendado es que copies el arreglo o el valor y luego lo devuelvas. Por eso la variable currentProducts
            return {...state, currentProduct: product };
        case ACTION_GET_CURRENT_POST:
            let currentProduct = action.payload 
            return {...state, currentProduct: currentProduct };

      default:
        return state
    }
};
 
export default productReducer;