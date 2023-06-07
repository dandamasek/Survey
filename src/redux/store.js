import { configureStore } from '@reduxjs/toolkit'
import surveyReducer from '../features/SurveySlice'
import userReducer from '../features/UserSlice'
export const store = configureStore({
    reducer: {

        surveys : surveyReducer,
        users: userReducer
    }
})
