import {takeLatest,all,takeEvery,put,call,take,fork} from 'redux-saga/effects'
import {fetchDataFailure,fetchDataRequest,fetchDataSuccess} from '../actions/fetchAsyncAction'
import {ADD_ACTION, ADD_ACTION_SUCCESS,INCREMENT_ASYNC,INCREMENT_ASYNC_ACTION,addOneAsync,addOne} from '../actions/counterAction';
import {delay} from 'redux-saga'


 
export default function* rootSaga () {
// while (true) {
//     yield watchIncrementAsync()
//     yield watchGetDataByType()
// }
    yield all([
    watchIncrementAsync(),
    watchGetDataByType()
    ])
// 
}
 
// export async function incrementAsync(){
// await delay(1000)
// await put(addOneAsync());
// }
export function* incrementAsync() {
    console.log('>>>>>incrementAsync')
    yield delay(1000)
    // yield put(addOneAsync());
    yield put(addOne());
}
 
export function* watchIncrementAsync() {
    yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}
  
//用saga异步获取后台数据
function fetchCnData(name) {
    return fetch(`https://cnodejs.org/api/v1/topics?tab=${name}`).then((response) => {
        if (response.status !== 200) {
            throw new Error('Fail to get response with status ' + response.status)
        }
        return response.json()
    })

}
// 1.worker
export function* getDataByType(name) {
    try {
        const response = yield call(fetchCnData, name);
        yield put(fetchDataSuccess(response.data))
    } catch (error) {
        yield put(fetchDataFailure(error))
    }
}
// 2.watcher
export function* watchGetDataByType() {
    while (true) {
        const {
            name
        } = yield take('FETCH_ASYNC_REQUEST');
        yield fork(getDataByType, name)
    }


}