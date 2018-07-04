function addInput(state = {
    showtext: '沉良'
}, action) {
    const showtext = state.showtext
    console.log(showtext)
    switch (action.type) {
        case 'ADD_INPUT':
            return {
                ...state,
                showtext: action.text
            }
        default:
            return state
    }

}

export default addInput;