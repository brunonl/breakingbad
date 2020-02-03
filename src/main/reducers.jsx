import { combineReducers } from 'redux'
import characterReducer from '../character/characterReducer'

const rootReducer = combineReducers({
    character: () => (
        {
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
    ) 
})

export default rootReducer