import React from 'react'
import CharacterSearchForm from '../character/characterSearchForm'

export default props => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/character">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="/character">Personagens</a>
                    </li>
                </ul>
                <CharacterSearchForm/>

            </div>
        </nav>
    </header>
)
