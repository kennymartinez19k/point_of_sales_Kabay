import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import productReducer from './src/reducers/productReducer';
import userReducer from './src/reducers/userReducer';
import expensiveReducer from './src/reducers/expensiveReducer'
import logger from 'redux-logger';
import providerReducer from './src/reducers/providerReducer';

const rootReducer = combineReducers(
{ product: productReducer, user: userReducer, expensive: expensiveReducer, provider: providerReducer }
);
const configureStore = () => {
    return createStore(rootReducer, applyMiddleware(thunk));
}
export default configureStore;