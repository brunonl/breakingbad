import { combineReducers } from 'redux'
import characterReducer from '../character/characterReducer'

const rootReducer = combineReducers({
    character: characterReducer
})

export default rootReducer