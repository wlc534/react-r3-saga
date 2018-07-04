const FETCH_REQUEST = 'FETCH_REQUEST';
const FETCH_FAILURE = 'FETCH_FAILURE';
const FETCH_SUCCESS = 'FETCH_SUCCESS';

export const fetchDataRequest = () => {
    return {
        type: FETCH_REQUEST,
        status: 'loading'
    }
}
export const fetchDataFailure = (error) => {
    return {
        type: FETCH_FAILURE,
        error
    }
}
export const fetchDataSuccess = (result) => {
    return {
        type: FETCH_SUCCESS,
        result
    }
}

//redux-thunk 版通过不同 name值 如good job  share ask dev 
export const fetchData = (name) => {
    return (dispatch) => {
        const apiUrl = `https://cnodejs.org/api/v1/topics?tab=${name}`;
        dispatch(fetchDataRequest())
        return fetch(apiUrl).then((response) => {
            if (response.status !== 200) {
                throw new Error('Fail to get response with status ' + response.status)
            }
            response.json().then((responseJson) => {
                console.log(responseJson)
                dispatch(fetchDataSuccess(responseJson.data));
            }).catch((error) => {
                dispatch(fetchDataFailure(error))
            })
        }).catch((error) => {
            dispatch(fetchDataFailure(error));
        })

    }
}