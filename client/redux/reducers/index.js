import { combineReducers } from 'redux'

const createRootReducer = () => {
    return combineReducers({
        test: (store = {}) => store
    })
}

export default createRootReducer
