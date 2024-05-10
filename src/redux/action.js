export const loadAlbums = () => {
    return dispatch => {
        dispatch({type: "load/albums/start"})

        fetch("https://jsonplaceholder.typicode.com/albums")
        .then((responce) => responce.json())
        .then((albums) => dispatch({
            type: "load/albums/fulfilled",
            payload: albums
        }))
    }
}   

export const loadPhotos = (id) => {
    return dispatch => {
        dispatch({type: "load/photos/start"})

        fetch(`https://jsonplaceholder.typicode.com/photos/?albumId=${id}`)
        .then((responce) => responce.json())
        .then((data) => dispatch({
            type: "load/photos/fulfilled",
            payload: data
        }))
    }
}