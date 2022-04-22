import {  ACTION_GET_PRODUCTS, ACTION_INSERT_PRODUCT, ACTION_GET_PRODUCT, ACTION_UPDATE_PRODUCT, ACTION_DELETE_PRODUCT, ACTION_RESET_PRODUCT } from '../constants'
const INITIAL_STATE = {
    products: [],
    currentProduct: null
};
 
const productReducer = (state = INITIAL_STATE, action) => {
    const { products } = state
    switch (action.type) {
      case ACTION_RESET_PRODUCT:
        return {...state, products: action.payload };

      case ACTION_GET_PRODUCTS:
          return {...state, products: [...action.payload] };
      
      case ACTION_GET_PRODUCT:
            return {...state, currentProduct: action.payload };
      
      case ACTION_INSERT_PRODUCT:
        let insertProducts = [...products] // Nota> Redux no funciona correctamente si usas el mismo campo products, sino que lo recomendado es que copies el arreglo o el valor y luego lo devuelvas. Por eso la variable currentProducts
        insertProducts.push({...action.payload})
        return {...state, products: insertProducts };

       case ACTION_UPDATE_PRODUCT:
            let updateProducts = [...products]
            updateProducts[action.payload.index] = {...action.payload.element}
            return {...state, products: updateProducts };
        case ACTION_DELETE_PRODUCT:
                let deleteProducts = [...products]
                let viewIndex = deleteProducts.findIndex(x => x.key == `View_${action.payload}`)
                deleteProducts.splice(viewIndex, 1)
                return {...state, products: deleteProducts };

      default:
        return state
    }
};
 
export default productReducer;