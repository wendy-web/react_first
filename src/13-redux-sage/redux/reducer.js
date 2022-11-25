const reducer = (prevState = {
    list1:[],
    list2: []
}, actions) => {
    const newState = {...prevState}
    switch(actions.type) {
        case 'change_list1':
            newState.list1 = actions.payload
            return newState;
        case 'change_list2':
            newState.list2 = actions.payload
            return newState;
        default:
            return prevState;
    }
}

export default reducer;