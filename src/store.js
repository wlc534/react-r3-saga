import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux'
import createSagaMiddleware from 'redux-saga'
import counter from './reducers/counter'
import addInput from './reducers/addInput'
import thunkReducer from './reducers/thunkReducer'
import sagaReducer from './reducers/sagaReducer'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import rootSaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()

const reducer = combineReducers({
    counter,
    addInput,
    thunkReducer,
    sagaReducer
})
const store = createStore(reducer, applyMiddleware(sagaMiddleware, thunk, logger))

sagaMiddleware.run(rootSaga)

export default store