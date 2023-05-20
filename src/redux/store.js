import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from '../features/SurveySlice'
import msgReducer from '../features/MsgSlice'


export const store = configureStore({
    reducer: {
        surveys : surveyReducer,
        msg: msgReducer
    }
})
