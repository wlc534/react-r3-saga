function thunkReducer(state = {
    data: []
}, action) {
    console.log(action)
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return { ...state,
                data: action.result,
                status: 'success'
            }
        case 'FETCH_FAILURE':
            return { ...state,
                status: 'failure'
            }
        case 'FETCH_REQUEST':
            return { ...state,
                status: 'loading'
            }
        default:
            return state
    }

}

export default thunkReducer;