import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import CardCharacter from '../template/cardCharacter'

import { searchCharacter } from './characterActions'

class ResultSearchCharacter extends Component {

    renderRows() {
        const list = this.props.list || []
        return list.map(character => (
            <CardCharacter name={character.name}/>
        ))
    }

    render() {
        return (
            <div className='row'>
                {this.renderRows()}
            </div>
        )

    }
}

const mapStateToProps = state => ({ searchStringCharacter: state.character.searchStringCharacter, list: state.character.list })

export default connect(mapStateToProps)(ResultSearchCharacter)

