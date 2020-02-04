import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import CardCharacter from '../template/cardCharacter'

import { getCharacter } from './characterActions'

class CharacterList extends Component {
    constructor(props) {
        super(props)
    }
    
    componentWillMount() {
        this.props.getCharacter()
    }

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

const mapStateToProps = state => ({ list: state.character.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getCharacter }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)

