import React from 'react'

export default function InfoHero(hero) {
    const { modified, description, name } = hero
    return (
        <>
            <h2>{name}</h2>
            <h6 className='font-weight-normal mt-3'>
                {description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus voluptatum, dolorem eum quos facilis ipsam sint perferendis officiis adipisci! Maiores neque facilis nihil harum, temporibus ipsa accusantium corporis alias natus."}
            </h6>
            <h6 className='mt-3 font-weight-normal'><b>Modified:</b> {modified}</h6>
        </>
    )
}
