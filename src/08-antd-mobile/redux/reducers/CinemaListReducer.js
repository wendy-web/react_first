const CinemaListReducer = (prevState = {
    list: []
}, action) => {
    const newState = {...prevState};
    switch(action.type) {
        case 'change_list':
            newState.list = action.value;
            return newState;
        default:
            return prevState;
    }
}

export default CinemaListReducer;