import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './src/reducers/productReducer';
import userReducer from './src/reducers/userReducer';
import logger from 'redux-logger';

const rootReducer = combineReducers(
{ product: productReducer, user: userReducer }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk, logger));
}
export default configureStore;