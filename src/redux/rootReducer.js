import { combineReducers } from "redux"
import createQuestionsReducer from "./createQuestions/createQuestionsReducer"
import cakeReducer from "./cake/cakeReducer"

const rootReducer = combineReducers({
    
    survey: createQuestionsReducer
})

export default rootReducer