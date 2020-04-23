import React from 'react'
import '../assets/styles/Menu.css'
import { Link } from 'react-router-dom'

export default function Menu() {
    return (
        <>
            <nav className="shift">
                <Link to='/'>
                    <img src="https://cdn.iconscout.com/icon/free/png-512/marvel-282124.png" alt="" width="100px" />
                </Link>
                <ul>
                    <li>
                        <Link to="/characters" className='text-decoration-none'>Characters</Link>
                    </li>
                    <li>
                        <Link to="/comics" className='text-decoration-none'>Comics</Link>
                    </li>
                    <li>
                        <Link to="/series" className='text-decoration-none'>Series</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}
