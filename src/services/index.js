import { getURL } from '../utils/Config'

export const getHeroes = async () => {
    let URL = getURL('characters')
    const heroes = await fetch(URL).then(res => res.json())
        .then(data => data.data.results)
    return heroes
}

export const getComics = async () => {
    let URL = getURL('comics')
    const comics = await fetch(URL).then(res => res.json())
        .then(data => data.data.results)
    return comics
}

export const getSeries = async () => {
    let URL = getURL('series')
    const series = await fetch(URL).then(res => res.json())
        .then(data => data.data.results)
    return series
}

export const getHero = async (id) => {
    let URL = getURL(`characters/${id}`)
    const hero = await fetch(URL).then(res => res.json())
        .then(data => {
            return data.data.results
        })
    return hero
}

export const getComic = async (id) => {
    let URL = getURL(`comics/${id}`)
    const comic = await fetch(URL).then(res => res.json())
        .then(data => {
            return data.data.results
        })
    return comic
}

export const getSerie = async (id) => {
    let URL = getURL(`series/${id}`)
    const serie = await fetch(URL).then(res => res.json())
        .then(data => {
            return data.data.results
        })
    return serie
}


