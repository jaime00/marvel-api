import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import Main from './Main'
import { Loader } from './Loader'
import { getHeroes } from '../utils/Helper'
import { Spring, Trail } from 'react-spring/renderprops'

export const Heroes = () => {
    const [heroes, setHeroes] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const heroes = await getHeroes()
            setHeroes(heroes)
        }
        fetchData()
    }, [])
    return (
        <>
            <Spring
                from={{ marginLeft: 1000 }}
                to={{ marginLeft: 0 }}
            >
                {props => <Main style={props} />}
            </Spring>
            {(heroes.length === 0) && <Loader />}
            <div className='heroes d-flex flex-wrap justify-content-center mt-5' >
                <Trail
                    items={heroes}
                    keys={hero => hero.id}
                    from={{ opacity: -3, transform: 'translate3D(0, -10px, 0) scale(13)' }}
                    to={{ opacity: 3, transform: 'translate3d(0,0px,0)' }}
                >
                    {hero => props => (
                        <Hero style={props} key={hero.id} {...hero} />
                    )}
                </Trail>
            </div>
        </>
    )

};
