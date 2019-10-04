const tickSquare = (state = {}, action) => {
    switch (action.type) {
        case 'TICK_SQUARE':
            return {
                ...state,
                index: action.index
            }
        default:
            return state

    }

}

export default tickSquare