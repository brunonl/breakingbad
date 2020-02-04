import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Grid from '../template/grid'
import CardCharacter from '../template/cardCharacter'
import If from '../template/if'
import { searchCharacter } from './characterActions'
import Pagination from '../utilities/pagination';

class ResultSearchCharacter extends Component {
    
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

    renderRows() {
        const list = this.state.pageOfItems || []
        return list.map(character => (
            <Grid key={character.char_id} cols="12 6 3">
                <CardCharacter name={character.name}/>
            </Grid>
        ))
    }

    render() {
        return (
            <div className='row'>
                <If test={this.props.list.length > 0}>
                    <h1>Voce buscou por {this.props.searchStringCharacter}</h1>
                </If>
                <If test={this.props.list.length == 0}>
                    <p>Ops Não temos resuktados para a sua busca!</p>
                    <a className="btn btn-primary" href="/character">Voltar</a>
                </If>
                {this.renderRows()}

                <Pagination items={this.props.list} onChangePage={this.onChangePage} />
            </div>
        )

    }
}

const mapStateToProps = state => ({ searchStringCharacter: state.character.searchStringCharacter, list: state.character.list })

export default connect(mapStateToProps)(ResultSearchCharacter)

