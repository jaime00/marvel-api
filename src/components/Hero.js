import React from 'react'
import '../assets/styles/Hero.css'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle
} from 'reactstrap'

import { Link } from 'react-router-dom'

export default function Hero(props) {
    const { id, thumbnail, name, description, style } = props
    return (
        <Card className="hero" style={style}>
            <Link to={`/characters/${id}`} className='text-decoration-none text-reset'>
                <CardImg top width="100%" src={`${thumbnail.path}.${thumbnail.extension}`} alt={name} />
                <CardBody>
                    <CardTitle className="px-6 py-2s h6" >{name}</CardTitle>
                    <CardText className="px-6">
                        {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum, dolorem eum quos facilis ipsam sint perferendis officiis adipisci! Maiores neque facilis nihil harum, temporibus ipsa accusantium corporis alias natus."}
                    </CardText>
                </CardBody >
            </Link>
        </Card >
    )
}
