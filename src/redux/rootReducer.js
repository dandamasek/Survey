import { combineReducers } from "redux"
import cakeReducer from "./cake/cakeReducer"
import iceCreamReducer from "./iceCream/iceCreamReducer"
import createTitleReducer from "./CreateTitle/CreateTitleReducer"
import createTypeReducer from "./CreateType/CreateTypeReducer"

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer,
    title: createTitleReducer,
    type: createTypeReducer
})

export default rootReducer