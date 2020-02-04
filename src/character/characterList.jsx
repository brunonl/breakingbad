import React, { Component } from 'react'
import ReactDOM from "react-dom";
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import CardCharacter from '../template/cardCharacter'
import { getCharacter } from './characterActions'
import Pagination from '../utilities/pagination';

class CharacterList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            pageOfItems: []
        };

        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    componentWillMount() {
        this.props.getCharacter()
    }

    renderRows() {
        const list = this.state.pageOfItems || []
        return list.map(character => (
            <Grid key={character.char_id} cols="12 6 3">
                <CardCharacter name={character.name} />
            </Grid>

        ))
    }

    render() {
        return (
            <div className='row'>
                {this.renderRows()}

                <Pagination items={this.props.list} onChangePage={this.onChangePage} />
            </div>
        )

    }
}

const mapStateToProps = state => ({ list: state.character.list })
const mapDispatchToProps = dispatch => bindActionCreators({ getCharacter }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(CharacterList)

