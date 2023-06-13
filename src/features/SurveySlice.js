import { createSlice } from "@reduxjs/toolkit";

// A Redux slice for managing the state of the surveys
export const surveySlice = createSlice({
  name: "surveys",
  initialState: [],
  reducers: {
    loadData: (state, action) => {
      const surveys = action.payload;
      let newSurveys = [];
      let isAlreadyinStore = false;

      // Iterate through the surveys to be loaded
      for (let survey of surveys) {
        // Check if the survey is already present in the state
        for (let surv of state) {
          if (survey.id === surv.id) {
            isAlreadyinStore = true;
            console.log(`Survey "${survey.name}" is already loaded`);
          }
        }

        if (!isAlreadyinStore) {
          newSurveys = [...newSurveys, survey];
        }
      }

      state.push(...newSurveys);
    },


    addSurvey: (state, action) => {
      const newSurvey = action.payload;
      state.push(newSurvey);
      console.log('Survey "' + newSurvey.name + '" added to store');  
    },

    addQuestion: (state, action) => {
      const newQuestion = action.payload;
      console.log("addQuestion action", newQuestion);

      // Find specific survey by id and then add a new question to its questions list
      state.forEach((survey) => {
        if (survey.id === newQuestion.survey.id) {
          survey.questions.push(newQuestion);
        }
      });
    },

    updateSurveyName: (state, action) => {
      const [id, lastchange, newName] = action.payload;

      state.forEach((survey) => {
        if (survey.id === id) {
          survey.name = newName;
          survey.lastchange = lastchange;
        }
      });
    },

    updateQuestion: (state, action) => {
      
      const newQuestion = action.payload.question;
      const surveyId = action.payload.surveyId;

      console.log('Question "' + newQuestion.name + '" updated in store');

      state.forEach((survey) => {
        if (survey.id === surveyId) {
          survey.questions.forEach((question) => {
            if (question.id === newQuestion.id) {
              question.name = newQuestion.name;
              question.lastchange = newQuestion.lastchange;
              question.order = newQuestion.order;
              question.type = newQuestion.type;
            }
          });
        }
      });
    },

    updateQuestionValues: (state, action) => {
      const { id, lastchange, name, order } = action.payload;
      console.log('QuestionValue "' + name + '" updated in store');

      state.forEach((survey) => {
        survey.questions.forEach((question) => {
          question.values.forEach((value) => {
            if (value.id === id) {
              value.lastchange = lastchange;
              value.name = name;
              value.order = order;
            }
          });
        });
      });
    },

    insertQuestionValues: (state, action) => {
      const value = action.payload;
      console.log('QuestionValue "' + value.name + '" updated in store');

      state.forEach((survey) => {
        survey.questions.forEach((question) => {
          if (question.id === value.question.id) {
            question.values.push(value);
          }
        });
      });
    },

    updateAnswerValue: (state, action) => {
      const [id, lastchange, value] = action.payload;

      state.forEach((survey) => {
        survey.questions.forEach((question) => {
          question.answers.forEach((answer) => {
            if (answer.id === id) {
              answer.value = value;
              answer.lastchange = lastchange;
              console.log(answer.value);
            }
          });
        });
      });
    },

   
  },
});

// Export the action creators from the surveySlice
export const {
  loadData,
  
  addSurvey,
  updateSurveyName,
  updateQuestion,
  updateQuestionValues,
  insertQuestionValues,
  addQuestion,
  updateAnswerValue,
  surveyAssignTo,

} = surveySlice.actions;

// Export the surveySlice reducer
export default surveySlice.reducer;