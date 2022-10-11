import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer } from './reducers/productReducers';

import thunk from 'redux-thunk';

const reducer = combineReducers ({
    products: productsReducer,
    productDetails: productDetailsReducer
})

let initialState = {}

const middleware = [thunk]
const store = createStore (reducer, initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)

export default store;