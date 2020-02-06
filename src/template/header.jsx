import React from 'react'
import CharacterSearchForm from '../character/characterSearchForm'

import logo from '../assets/img/logo.png';

export default props => (
    <header>
        <nav className="navbar navbar-expand-lg navbar-dark p-0 mb-5">
            <a className="navbar-brand" href="/character">
                <img className="logo" src={logo} alt=""/>
            </a>
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
