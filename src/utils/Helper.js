import { getURL } from './Config.js'

export const getHeroes = async () => {
    let URL = await getURL('characters')
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


