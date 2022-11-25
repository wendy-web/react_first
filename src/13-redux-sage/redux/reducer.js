const reducer = (prevState = {
    list:[]
}, actions) => {
    const newState = {...prevState}
    switch(actions.type) {
        case 'change_list':
            newState.list = actions.payload
            return newState;
        default:
            return prevState;
    }
}

export default reducer;