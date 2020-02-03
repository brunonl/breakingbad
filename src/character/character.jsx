import React, { Component } from 'react'
import CharacterList from './characterList'
import axios from 'axios'

const URL = 'https://www.breakingbadapi.com/api/'

export default class Character extends Component {

    constructor(props) {
        super(props)
        this.getCharacter()
    }

    getCharacter() {
        axios.get(`${URL}characters`)
            .then(resp => console.log(resp.data))
    }

    render() {
        return (
            <div>
                <CharacterList/>
            </div>
        )
    }

}
