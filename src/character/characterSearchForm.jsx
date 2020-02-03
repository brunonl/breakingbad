import React, { Component } from 'react'
import { browserHistory } from 'react-router'

export default class CharacterSearchForm extends Component {
    redirect() {
        browserHistory.push('/resultSearchCharacter')
    }
    render() {
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" onClick={this.redirect}>Search</button>
            </form>
        )
    }

}
