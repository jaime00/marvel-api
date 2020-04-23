import React, { useEffect, useState } from 'react'
import { Spring, Trail } from 'react-spring/renderprops'
import { Loader } from './Loader'
import { getComics } from '../utils/Helper';
import Comic from './Comic'
import Main from './Main';

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
            <Spring
                from={{ marginLeft: 1000 }}
                to={{ marginLeft: 0 }}
            >
                {props => <Main style={props} />}
            </Spring>
            {(comics.length === 0) && <Loader />}
            <div className='comics d-flex flex-wrap justify-content-center m-5' >
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
