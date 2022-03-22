import React, { useEffect, useState } from 'react'
import { Trail } from 'react-spring/renderprops'
import { Loader } from './Loader'
import { getSeries } from '../services';
import Serie from './Serie'

export const Series = () => {
    const [series, setSeries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const series = await getSeries()
            setSeries(series)
        }
        fetchData();
    }, [])

    return (
        <>
            <div className='series d-flex flex-wrap justify-content-center m-5' >
                {(series.length === 0) && <Loader />}
                <Trail
                    items={series}
                    keys={serie => serie.id}
                    from={{ opacity: -3, transform: 'translate3D(0, -10px, 0) scale(13)' }}
                    to={{ opacity: 3, transform: 'translate3d(0,0px,0)' }}
                >
                    {serie => props => (
                        <Serie style={props} key={serie.id} {...serie} />
                    )}
                </Trail>
            </div>
        </>
    )

};
