import { applyMiddleware, combineReducers, createStore } from "redux";
import { thunk } from "redux-thunk";
import { createLogger } from "redux-logger";
import { albumsReducer } from "./albums";
import { photosReducer } from "./photos";

const logger = createLogger({
    diff: true,
    collapsed: true
})

const rootState = combineReducers({
    albums: albumsReducer,
    photos: photosReducer
})

export const store = createStore(rootState, applyMiddleware(thunk, logger))