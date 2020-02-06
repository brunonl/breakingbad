import React, { Component } from 'react'
import { browserHistory } from 'react-router'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { changeSearchCharacter, searchCharacter } from './characterActions'

class CharacterSearchForm extends Component {
    searchAndRedirect() {
        this.props.searchCharacter(this.props.searchStringCharacter)
        browserHistory.push('/resultSearchCharacter')
    }

    render() {
        return (
            <div className="form-inline search__form my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="search" placeholder="Pesquise os personagens" onChange={this.props.changeSearchCharacter} value={this.props.searchStringCharacter} />
                <button className="btn btn-outline-success my-2 my-sm-0" disabled={!this.props.searchStringCharacter} onClick={() => this.searchAndRedirect()}>Search</button>
            </div>
        )
    }

}

const mapStateToProps = state => ({ searchStringCharacter: state.character.searchStringCharacter })
const mapDispatchToProps = dispatch => bindActionCreators({ changeSearchCharacter, searchCharacter }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSearchForm)
