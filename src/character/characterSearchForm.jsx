import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { searchCharacter } from './characterActions'

const CharacterSearchForm = props => {
    const redirect = () => {
        browserHistory.push('/resultSearchCharacter')
    }
  
    return (
        <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Search" onChange={props.searchCharacter} value={props.searchString}/>
            <button className="btn btn-outline-success my-2 my-sm-0" onClick={redirect()}>Search</button>
        </form>
    )
  

}

const mapStateToProps = state => ({searchString: state.character.searchString})
const mapDispatchToProps = dispatch => bindActionCreators({ searchCharacter }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSearchForm)
