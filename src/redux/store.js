import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from '../features/SurveySlice'


export const store = configureStore({
    reducer: {
        surveys : surveyReducer
    }
})
