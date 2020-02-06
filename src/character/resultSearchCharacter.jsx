import React, { Component } from 'react'
import { connect } from 'react-redux'

import Grid from '../template/grid'
import CardCharacter from '../template/cardCharacter'
import If from '../template/if'
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
            <Grid key={character.char_id} cols="12 6 6 3" utilitiesClasses="px-2">
                <CardCharacter occupation={character.occupation} birthday={character.birthday} status={character.status} img={character.img} name={character.name} />
            </Grid>
        ))
    }

    render() {
        return (
            <div className='row'>
                <Grid cols="12" utilitiesClasses="pb-5">
                    <If test={this.props.list.length > 0}>
                        <h1>Voce buscou por "{this.props.searchStringCharacter}"</h1>
                    </If>
                </Grid>
                <Grid cols="12" utilitiesClasses="text-center">
                    <If test={this.props.list.length === 0}>
                        <p className="d-block">Ops!:(, Não encontramos resultados para a sua busca!</p>
                        <a className="btn btn-outline-light" href="/character">Voltar</a>
                    </If>
                </Grid>
                
                {this.renderRows()}

                <Pagination items={this.props.list} onChangePage={this.onChangePage} />
            </div>
        )

    }
}

const mapStateToProps = state => ({ searchStringCharacter: state.character.searchStringCharacter, list: state.character.list })

export default connect(mapStateToProps)(ResultSearchCharacter)

