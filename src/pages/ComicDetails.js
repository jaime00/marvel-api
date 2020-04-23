import React, { useState, useEffect } from 'react'
import { Row, Col, Container } from 'reactstrap'
import { Loader } from '../components/Loader'
import { getComic } from '../utils/Helper'
import ImageAnimated from '../components/ImageAnimated'
import InfoComic from '../components/InfoComic'
// import Image from 'react-bootstrap/Image'

const ComicDetails = (props) => {
    const [comic, setComic] = useState({})
    const { id } = props.match.params

    useEffect(() => {
        const fetchData = async id => {
            const comic = await getComic(id)
            setComic(comic[0])
        }
        fetchData(id)
    }, [id])

    const { thumbnail, title } = comic
    if (title === undefined) return <Loader />

    return (
        <div className='comicDetails'>
            <Container className='mt-5'>
                <Row>
                    <Col>
                        <div className="comic_image">
                            <ImageAnimated thumbnail={thumbnail} />
                            {/* <Image src={`${path}.${extension}`} /> */}
                        </div>
                    </Col>
                    <Col>
                        <InfoComic {...comic} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ComicDetails;


