const initialState = {
    photos: [],
    loading: false
}

export const photosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "load/photos/start":
            return {
                ...state,
                loading: true
            }

        case "load/photos/fulfilled":
            return {
                ...state,
                loading: false,
                photos: action.payload
            }
        default: 
            return state
    }
}