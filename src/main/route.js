import React from 'react'
import { Router, Route, Redirect, browserHistory } from 'react-router'

import Character from '../character/character'
import ResultSearchCharacter from '../character/resultSearchCharacter'

export default props => (
    <Router history={browserHistory}>
        <Route path='/character' component={Character} />
        <Route path='/resultSearchCharacter' component={ResultSearchCharacter} />
        <Redirect from='*' to='/character' />
    </Router>
)