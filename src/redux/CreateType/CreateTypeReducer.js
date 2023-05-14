import { CREATE_TYPE } from "./CreateTypeActions"

const initialState = {
    nameType: 'text'
}

const createTypeReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_TYPE: return {
            ...state,
            nameType : action.payload
        }
        default: return state

    }
}
export default createTypeReducer