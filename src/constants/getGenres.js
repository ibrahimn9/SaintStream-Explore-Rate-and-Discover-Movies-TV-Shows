import genres from "./genres.json"

export const getGenres = (arrayOfIds, type) =>  {
    let returnedArray = []
    arrayOfIds.map(id => {
        const genreName = genres[type]?.find(genre => genre.id === id)?.name 
        returnedArray.push(genreName)
    })
    return returnedArray
}