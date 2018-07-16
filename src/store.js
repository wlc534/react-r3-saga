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



const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    counter,
    addInput,
    thunkReducer,
    sagaReducer
})
const enhancer = compose(
    // Middleware you want to use in development:
    applyMiddleware(sagaMiddleware, thunk, logger),
    // Required! Enable Redux DevTools with the monitors you chose
    DevTools.instrument()
  );
const store = createStore(reducer,enhancer )

sagaMiddleware.run(rootSaga)

export default store