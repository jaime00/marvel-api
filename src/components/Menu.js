import React from 'react'
import '../assets/styles/Menu.css'
import { Link, useLocation } from 'react-router-dom'

export default function Menu() {
	const location = useLocation()
	let active1 = ''
	let active2 = ''
	let active3 = ''
	switch (location.pathname) {
		case '/characters':
			active1 = 'shift-item active'
			break
		case '/comics':
			active2 = 'shift-item active'
			break
		case '/series':
			active3 = 'shift-item active'
			break
		default:
			active1 = 'shift-item active'
			break
	}
	return (
		<>
			<nav className="shift">
				<Link to="/">
					<img src="https://cdn.iconscout.com/icon/free/png-512/marvel-282124.png" alt="" width="100px" />
				</Link>
				<ul>
					<li>
						<Link to="/characters" className={`text-decoration-none ${active1}`}>
							Characters
						</Link>
					</li>
					<li>
						<Link to="/comics" className={`text-decoration-none ${active2}`}>
							Comics
						</Link>
					</li>
					<li>
						<Link to="/series" className={`text-decoration-none ${active3}`}>
							Series
						</Link>
					</li>
				</ul>
			</nav>
		</>
	)
}
