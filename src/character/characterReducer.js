const INITIAL_STATE = {
    searchStringCharacter: '',
    list: []
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'GET_CHARACTER':
            return {...state, list: action.payload.data}
        case 'SEARCH_CHARACTER':
            return {...state, list: action.payload.data}
        case 'CHANGE_SEARCH_CHARACTER':
            return {...state, searchStringCharacter: action.payload}
        default : 
            return state
    }
}