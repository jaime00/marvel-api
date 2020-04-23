import React, { useState, useEffect } from 'react'
import { getHero } from '../utils/Helper'
import { Loader } from '../components/Loader'
import { Row, Col, Container } from 'reactstrap'
import '../assets/styles/Details.css'
import ImageAnimated from '../components/ImageAnimated'
import InfoHero from '../components/InfoHero'

const HeroDetails = (props) => {
    const [hero, setHero] = useState({})
    const { id } = props.match.params

    useEffect(() => {
        const fetchData = async id => {
            const hero = await getHero(id)
            setHero(hero[0])
        }
        fetchData(id)
    }, [id])
    console.log(hero);

    const { thumbnail, name } = hero
    if (name === undefined) return <Loader />
    
    return (
        <div className='heroDetails'>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <div className="hero_image">
                            <ImageAnimated thumbnail={thumbnail} />
                            {/* <Image src={`${path}.${extension}`} /> */}
                        </div>
                    </Col>
                    <Col className='align-self-center'>
                        <InfoHero {...hero} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default HeroDetails;


