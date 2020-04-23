import React from 'react'

const InfoComic = (props) => {
    const { dates, title, creators, description } = props
    const writers = creators.items.filter(ele => ele.role === 'writer')
    const published = new Date(dates[0].date).toDateString();
    return (
        <>
            <h2>{title}</h2>
            <h5 className='mt-4'>Published: </h5>
            <p>{published} </p>
            <div className="text-capitalize mt-3">
                {(writers.length !== 0) && <>
                    <h5>{writers.length === 1 ? "Writer:" : "Writers:"}</h5>
                    {
                        writers.map(
                            ({ name }, i) =>
                                <span key={i}>
                                    {name}{(i !== writers.length - 1) ? ", " : "."}
                                </span>
                        )
                    }
                </>
                }
            </div>
            <h6 className='font-weight-normal mt-4'>
                {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum, dolorem eum quos facilis ipsam sint perferendis officiis adipisci! Maiores neque facilis nihil harum, temporibus ipsa accusantium corporis alias natus."}
            </h6>
        </>
    )
}

export default InfoComic