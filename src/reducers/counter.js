import {
    ADD_ACTION,
    ADD_ACTION_SUCCESS
} from '../actions/counterAction';

function counter(state = {
    count: 0,
    secCount: 0
}, action) {
    const count = state.count
    console.log(action)
    switch (action.type) {
        case 'ADD':
            return { ...state,
                count: count + 1,
                secCount: `${count+1}+`
            }
        case 'MINUS':
            return { ...state,
                count: count - 1,
                secCount: `${count-1}-`
            }
        case 'STRING':
            return { ...state,
                strText: action.string
            }
        default:
            return state
    }

}

export default counter;