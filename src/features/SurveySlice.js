import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the projects
export const surveySlice = createSlice({
    name: "surveys",
    initialState: [],
    reducers: {
        // A reducer that adds a new project to the projects state array
      loadData: (state, action) => {
        const surveys = action.payload
        let newSurveys = []
        let isAlreadyinStore = false

            // Iterate through the projects to be loaded
            for (let survey of surveys) {
                // Check if the project is already present in the state
                for (let surv of state) {
                    if (survey.id === surv.id) {
                        isAlreadyinStore = true
                        console.log(`Survey "${survey.name}" is already loaded`)
                    }
                }
                
                if (!isAlreadyinStore) {
                    newSurveys = [...newSurveys, survey]
                }
            }
            
        state = [...state, ...newSurveys]
        return state
        }, 

      addSurvey: (state, action) => {
        const newSurvey = action.payload

        state.push(newSurvey)
        return state
        }, 

        // add newQuestion to specific survey
        addQuestion: (state, action) => {
          const newQuestion = action.payload;
          console.log("addQuestion action", newQuestion);
          
          // cycle to find specific survey by id and then add new question to its questions list
          const updatedSurveys = state.map((survey) => {
            if (survey.id === newQuestion.survey.id) {
              const updatedQuestions = [...survey.questions, newQuestion];
              return { ...survey, questions: updatedQuestions };
            }
            return survey;
          });
        
          return updatedSurveys;
        },
        

      updateSurveyName: (state, action) => {
        const [ id, lastchange, newName ] = action.payload;
        console.log("slice",lastchange)
        const updatedSurveys = state.map(survey => {
          if (survey.id === id) {
            return { ...survey, name: newName, lastchange };
          }
          return survey;
        });
      
        return updatedSurveys;
      },


      updateQuestion: (state, action) => {
        // console.log("Payload",action.payload.question);
        const [ newQuestion, surveyId] = action.payload;
        console.log("updateQuestion Slice",surveyId);

        state.forEach((survey) => {
          survey.questions.forEach((question) => {

            if (question.id === newQuestion.id) {
              question.name = newQuestion.name;
              question.lastchange = newQuestion.lastchange;
              question.order = newQuestion.order;
              question.type = newQuestion.type;
            }
           
          });
        });
        return state;
        
      },

      // updateNewQuestion: (state, action) => {
      //   const { id, lastchange, order, name } = action.payload;
      
      //   const updatedSurveys = state.map(survey => {
      //     if (survey.id === id) {
      //       return { ...survey, name: newName, lastchange };
      //     }
      //     return survey;
      //   });
      
      //   return updatedSurveys;
      // },

      updateAnswerValue: (state, action) => {
        const { id, lastchange, value } = action.payload;
        console.log("SSSSSS",lastchange);
          state.forEach((survey) => {
          survey.questions.forEach((question) => {
            question.answers.forEach((answer) => {
              if (answer.id === id) {
                answer.value = value;
                answer.lastchange = lastchange;
              }
            });
          });
        });
          return state;
      },

      surveyAssignTo:(state,action) =>{
          
          return state;
      }
  },
})

// Export the addProject action creator from the projectsSlice
export const { loadData, addSurvey, updateSurveyName, updateQuestion,addQuestion, updateAnswerValue, surveyAssignTo } = surveySlice.actions

// Export the projectsSlice reducer
export default surveySlice.reducer
