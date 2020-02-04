import axios from 'axios'

const URL = 'https://www.breakingbadapi.com/api/'


export const getCharacter = () => {
    const request = axios.get(`${URL}characters`)
    return {
        type: 'GET_CHARACTER',
        payload: request
    }
}

export const searchCharacter = (stringKey) => {
    const search = stringKey ? `?name=${stringKey}` : ''
    const request = axios.get(`${URL}characters${search}`)
    return {
        type: 'SEARCH_CHARACTER',
        payload: request
    }
}

export const changeSearchCharacter = (event) => ({
    type: 'CHANGE_SEARCH_CHARACTER',
    payload: event.target.value
})