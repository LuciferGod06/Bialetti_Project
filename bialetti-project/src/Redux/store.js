import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { paymentReducer } from './paymentReducer'
import Reducer from "./reducer"
import { productReducer } from "./productReducer"



const rootReducer = combineReducers({ paymentReducer, Reducer, productReducer })

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store }