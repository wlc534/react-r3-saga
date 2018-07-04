function sagaReducer(state = {
    data: []
}, action) {
    console.log(action)
    switch (action.type) {
        case 'FETCH_ASYNC_SUCCESS':
            return { ...state,
                data: action.result,
                status: 'success'
            }
        case 'FETCH_ASYNC_FAILURE':
            return { ...state,
                status: 'failure'
            }
        case 'FETCH_ASYNC_REQUEST':
            return { ...state,
                status: 'loading'
            }
        default:
            return state
    }

}

export default sagaReducer;