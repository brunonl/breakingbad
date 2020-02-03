import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import CardCharacter from '../template/cardCharacter'

const CharacterList = props => {

    const renderRows = () => {
        const list = props.list || []
        return list.map(character => (
            <CardCharacter/>
        ))
    }
 
    return (
        <div className='row'> 
            {renderRows()}
        </div>
    )

}

const mapStateToProps = state => ({list: state.character.list})
// const mapDispatchToProps = dispatch => bindActionCreators({ markAsDone, markAsPending, remove }, dispatch)

export default connect(mapStateToProps)(CharacterList)
    
