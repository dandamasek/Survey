import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const surveySlice = createSlice({
    name: "surveys",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
    loadData: (state, action) => {
        const surveys = action.payload
        state = [...state, ...surveys]
        return state
       } , 
    addSurvey: (state, action) => {
        const newSurvey = action.payload

        state.push(newSurvey)
        return state
       }, 

    updateSurveyName: (state, action) => {
        const { id, lastchange, newName } = action.payload;
      
        const updatedSurveys = state.map(survey => {
          if (survey.id === id) {
            return { ...survey, name: newName, lastchange };
          }
          return survey;
        });
      
        return updatedSurveys;
      },
    },
})

// Export the addProject action creator from the projectsSlice
export const { loadData, addSurvey, updateSurveyName } = surveySlice.actions

// Export the projectsSlice reducer
export default surveySlice.reducer
