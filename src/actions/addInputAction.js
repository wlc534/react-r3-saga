const ADD_INPUT_ACTION = 'ADD_INPUT';
const STRING = 'STRING';
export const addInput = (text) => {
    return {
        type: ADD_INPUT_ACTION,
        text: text
    }
}

export const showText = (text) => {
    return {
        type: STRING,
        string: text
    }
}