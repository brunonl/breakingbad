export const searchCharacter = (event) => ({
    type: 'SEARCH_CHARACTER',
    payload: event.target.value
})