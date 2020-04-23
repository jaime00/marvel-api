import React from 'react'
import {
    Card, CardImg, CardTitle
} from 'reactstrap'

import '../assets/styles/Comic.css'
import { Link } from 'react-router-dom'

export default function Hero(props) {
    const { id, thumbnail, name, title, style } = props
    return (
        <>
            <Card className="comic border-0" style={style}>
                <Link to={`/comics/${id}`} className='text-decoration-none text-reset'>
                    <CardImg top width="100%" src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
                    <CardTitle className='mt-4'>{title}</CardTitle>
                </Link>
            </Card >
        </>
    )
}
