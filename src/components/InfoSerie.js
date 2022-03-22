import React from 'react'


const convertDate = (date) => {
    if (date) {
        var obj =  new Date(date)
        let day = obj.getDate()
        let month = obj.getMonth() + 1
        let year = obj.getFullYear()
        return (month < 10) ? `${day}-0${month}-${year}` : `${day}-${month}-${year}`
    }
}

const getWriters = (list) => {
    return list.items.length > 0 ? list.items.map(ele => ele.name).join(', ') : "N/A";
}

const InfoSerie = (props) => {
    const { title, modified, description, rating, type, creators} = props
    return (
        <>
            <h2>{title}</h2>
            <div className="row mt-4">
                <div className='col'>
                    <b>Writers:</b> { getWriters(creators) || "N/A"}
                </div>
            </div>
            <div className="row mt-1">
                <div className='col'>
                    <b>Published:</b> {convertDate(modified) || "N/A"}
                </div>
                <div className='col'>
                    <b>Type:</b> {type || "N/A"}
                </div> 
            </div>
            <div className="row mt-1">
                <div className='col'>
                    <b>Rating:</b> {rating || "N/A"}
                </div>
            </div>
            <div className="text-capitalize mt-3">
            </div>
            <h6 className='font-weight-normal mt-4'>
                {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum, dolorem eum quos facilis ipsam sint perferendis officiis adipisci! Maiores neque facilis nihil harum, temporibus ipsa accusantium corporis alias natus."}
            </h6>
        </>
    )
}

export default InfoSerie