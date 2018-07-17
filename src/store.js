import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose 
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import counter from './reducers/counter'
import addInput from './reducers/addInput'
import thunkReducer from './reducers/thunkReducer'
import sagaReducer from './reducers/sagaReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootSaga from './sagas/sagas'
import DevTools from './containers/DevTools'
import { composeWithDevTools } from 'redux-devtools-extension'



const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    counter,
    addInput,
    thunkReducer,
    sagaReducer
})
// redux-devtools 方式Ⅰ
// const enhancer = compose(
//     // Middleware you want to use in development:
//     applyMiddleware(sagaMiddleware, thunk, logger),
//     // Required! Enable Redux DevTools with the monitors you chose
//     DevTools.instrument()
//   );
//   const store = createStore(reducer,enhancer )

// redux-devtools-extension 方式Ⅱ
    const store = createStore(reducer, composeWithDevTools(
        applyMiddleware(sagaMiddleware, thunk, logger),
        // other store enhancers if any
      ));

sagaMiddleware.run(rootSaga)

export default store