import React, { useState, useEffect } from 'react'
import { getSerie } from '../services'
import { Loader } from '../components/Loader'
import { Row, Col, Container } from 'reactstrap'
import '../assets/styles/Details.css'
import ImageAnimated from '../components/ImageAnimated'
import InfoSerie from '../components/InfoSerie'

const SerieDetails = (props) => {
    const [serie, setSerie] = useState({})
    const { id } = props.match.params

    useEffect(() => {
        const fetchData = async id => {
            const serie = await getSerie(id)
            setSerie(serie[0])
        }
        fetchData(id)
    }, [id])

    const { thumbnail, title } = serie
    if (title === undefined) return <Loader />
    
    return (
        <div className='heroDetails'>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <div className="hero_image">
                            <ImageAnimated thumbnail={thumbnail} />
                        </div>
                    </Col>
                    <Col className='align-self-center'>
                        <InfoSerie {...serie} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default SerieDetails;


