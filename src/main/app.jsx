import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import '../App.scss'

import React from 'react'
import Routes from './route'

import Character from '../character/character'
import Header from '../template/header'

export default props => (
    <div>
        <Header/>
        <Routes />
    </div>
)