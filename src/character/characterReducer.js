const INITIAL_STATE = {
    searchString: '',
    list: [
        {
            _id: 1,
            description: 'a'
        },
        {
            _id: 2,
            description: 'b'
        },
        {
            _id: 3,
            description: 'c'
        },

    ]
}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'SEARCH_CHARACTER':
            return {...state, searchString: action.payload}
        default : 
            return state
    }
}