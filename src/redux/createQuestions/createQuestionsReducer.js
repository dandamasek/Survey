import { CREATE_QUESTIONS } from "./createQuestionsActions"

const initialState = {
    questions: ''
}

const createQuestionsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_QUESTIONS: return {
            ...state,
            questions : action.payload
        }
        default: return state

    }
}
export default createQuestionsReducer