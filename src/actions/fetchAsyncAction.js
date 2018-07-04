const FETCH_ASYNC_REQUEST = 'FETCH_ASYNC_REQUEST';
const FETCH_ASYNC_FAILURE = 'FETCH_ASYNC_FAILURE';
const FETCH_ASYNC_SUCCESS = 'FETCH_ASYNC_SUCCESS';

export const fetchDataRequest = (name) => {
    return {
        type: FETCH_ASYNC_REQUEST,
        name
    }
}
export const fetchDataFailure = (error) => {
    return {
        type: FETCH_ASYNC_FAILURE,
        error
    }
}
export const fetchDataSuccess = (result) => {
    return {
        type: FETCH_ASYNC_SUCCESS,
        result
    }
}