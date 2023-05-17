import { CREATE_QUESTIONS } from "./createQuestionsActions"
import { CREATE_NAME } from "./createQuestionsActions"

const initialState = {
    id: 'x',
    name: 'x',
    lastchange: '10.10',
    questions: ''
}

const createQuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_QUESTIONS: return {
            ...state,
            questions : action.payload
        }
        case CREATE_NAME: return {
            ...state,
            name : action.payload
        }
        
        default: return state

    }
}
export default createQuestionsReducer