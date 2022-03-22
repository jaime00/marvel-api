import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Heroes } from './components/Heroes'
import Menu from './components/Menu'
import { Comics } from './components/Comics'
import HeroDetails from './pages/HeroDetails'
import ComicDetails from './pages/ComicDetails'
import Main from './components/Main'
import { Series } from './components/Series'
import SerieDetails from './pages/SerieDetails'

export default function App() {
	return (
		<BrowserRouter>
			<Menu />
			<Switch>
				<Route exact path="/">
					<Main />
					<Heroes />
				</Route>
				<Route exact path="/characters" component={Heroes} />
				<Route exact path="/comics" component={Comics} />
				<Route exact path="/series" component={Series} />
				<Route exact path="/comics/:id" component={ComicDetails} />
				<Route exact path="/characters/:id" component={HeroDetails} />
				<Route exact path="/series/:id" component={SerieDetails} />
			</Switch>
		</BrowserRouter>
	)
}
