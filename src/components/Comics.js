import React, { useEffect, useState } from 'react'
import { Trail } from 'react-spring/renderprops'
import { Loader } from './Loader'
import { getComics } from '../services';
import Comic from './Comic'

export const Comics = () => {
    const [comics, setComics] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const comics = await getComics()
            setComics(comics)
        }
        fetchData();
    }, [])

    return (
        <>
            <div className='comics d-flex flex-wrap justify-content-center m-5' >
                {(comics.length === 0) && <Loader />}
                <Trail
                    items={comics}
                    keys={comic => comic.id}
                    from={{ opacity: -3, transform: 'translate3D(0, -10px, 0) scale(13)' }}
                    to={{ opacity: 3, transform: 'translate3d(0,0px,0)' }}
                >
                    {comic => props => (
                        <Comic style={props} key={comic.id} {...comic} />
                    )}
                </Trail>
            </div>
        </>
    )

};
