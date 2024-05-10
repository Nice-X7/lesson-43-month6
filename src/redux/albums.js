const initialState = {
    albums: [],
    loading: false
}

export const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
        case "load/albums/start":
            return {
                ...state,
                loading: true
            }

        case "load/albums/fulfilled":
            return {
                ...state,
                loading: false,
                albums: action.payload
            }
        default: 
            return state
    }
}
