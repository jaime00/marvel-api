import React, { useEffect, useState } from 'react'
import Hero from './Hero'
import { Loader } from './Loader'
import { getHeroes } from '../services'
import { Trail } from 'react-spring/renderprops'

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
            <div className='heroes d-flex flex-wrap justify-content-center mt-5' >
                {(heroes.length === 0) && <Loader />}
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
