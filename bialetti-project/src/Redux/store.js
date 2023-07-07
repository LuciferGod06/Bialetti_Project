import { legacy_createStore as createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { paymentReducer } from './paymentReducer'


const rootReducer = combineReducers({ paymentReducer })

const store = createStore(rootReducer, applyMiddleware(thunk));

export { store }