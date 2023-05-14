import { CREATE_TITLE } from "./CreateTitleActions"

const initialState = {
    nameTitle: 'What is RGB'
}

const createTitleReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TITLE: return {
            ...state,
            nameTitle : action.payload
        }
        default: return state

    }
}
export default createTitleReducer