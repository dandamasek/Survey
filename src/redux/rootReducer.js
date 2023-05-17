import { combineReducers } from "redux"
import createQuestionsReducer from "./createQuestions/createQuestionsReducer"

const rootReducer = combineReducers({
    
    createQuestion: createQuestionsReducer
})

export default rootReducer