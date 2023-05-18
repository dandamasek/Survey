import { createSlice } from "@reduxjs/toolkit";
import data from'../components/SurveySelect' 


// A Redux slice for managing the state of the projects
export const surveySlice = createSlice({
    name: "surveys",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
       loadData: (state) => {
        state = data()
        console.log('SurveySlice',data())
        return state
       } , 
       addSurvey: (state, action) => {
        const newSurvey = action.payload

        state.push(newSurvey)
        return state
       }  
       
    },
})

// Export the addProject action creator from the projectsSlice
export const { loadData, addSurvey } = surveySlice.actions

// Export the projectsSlice reducer
export default surveySlice.reducer
