import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Heroes } from './components/Heroes'
import Menu from './components/Menu'
import { Comics } from './components/Comics'
import HeroDetails from './pages/HeroDetails'
import ComicDetails from './pages/ComicDetails'

export default function App() {
    return (
        <BrowserRouter>
            <Menu />
            <Switch>
                <Route exact path='/characters' component={Heroes} />
                <Route exact path='/comics' component={Comics} />
                <Route exact path='/comics/:id' component={ComicDetails} />
                <Route exact path='/characters/:id' component={HeroDetails} />
                <Redirect to='/characters' />
            </Switch>
        </BrowserRouter>
    )
}
