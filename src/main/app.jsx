import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'

import '../App.scss'

import React from 'react'
import Routes from './route'

import Header from '../template/header'

export default props => (
    <div className="main__content">
        <div className="container"> 
            <Header />
            <Routes />
        </div>
    </div>
)