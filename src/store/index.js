import { configureStore, createAction, createReducer } from "@reduxjs/toolkit"

const INITIAL_STATE = []

export const showDesc = createAction('showDesc')

const MovieReducers = createReducer(INITIAL_STATE, {
    [showDesc]: (state, action) => action.payload
})

const loggerMiddleware = store => next => action => {
    console.log(action)
    next(action)
}
const confirmMiddleware = store => next => action => {
    if(action.type === showDesc.type){
        next(action)
    }else{
        next(action)
    }
}

export default configureStore({
    reducer: {
        desc: MovieReducers
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(loggerMiddleware)
    .concat(confirmMiddleware)
})