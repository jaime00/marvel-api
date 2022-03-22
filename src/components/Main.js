import React from 'react'
import '../assets/styles/Main.css'
import { Jumbotron, Container } from 'reactstrap';

export default function Main(props) {
    const { style } = props ? props : { style: {} }
    return (
        <Jumbotron fluid className='main text-white' style={style}>
            <Container fluid className="text-center">
                <h1 className="display-3">The Marvel Universe </h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
            </Container>
        </Jumbotron>
    )
}
