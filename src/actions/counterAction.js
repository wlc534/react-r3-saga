export const ADD_ACTION = 'ADD';
export const INCREMENT_ASYNC_ACTION = 'INCREMENT_ASYNC';
export const MINUS_ACTION = 'MINUS';

export const addOne = () => {
    return {
        type: ADD_ACTION
    }
}

export const addOneAsync = () => {
    return {
        type: INCREMENT_ASYNC_ACTION
    }
}
export const minusOne = () => {
    return {
        type: MINUS_ACTION
    }
}