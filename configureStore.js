import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './src/reducers/productReducer';
import userReducer from './src/reducers/userReducer';
const rootReducer = combineReducers(
{ product: productReducer, user: userReducer }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;