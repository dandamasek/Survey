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

      // Find specific survey by id and then add a new question to its questions list
      state.forEach((survey) => {
        if (survey.id === newQuestion.survey.id) {
          survey.questions.push(newQuestion);
          console.log('Question "' + newQuestion.name + '" added to store');  
        }
      });
    },

    updateSurveyName: (state, action) => {
      const newSurvey = action.payload;
      state.forEach((survey ,index) => {
        if (survey.id === newSurvey.id) {
          survey.name = newSurvey.name;
          survey.lastchange = newSurvey.lastchange;
          console.log('Survey "' + newSurvey.name + '" updated in store');  
        }
      });
    },

    updateQuestion: (state, action) => {
      
      const newQuestion = action.payload.question;
      const surveyId = action.payload.surveyId;

 
      state.forEach((survey) => {
        if (survey.id === surveyId) {
          survey.questions.forEach((question) => {
            if (question.id === newQuestion.id) {
              question.name = newQuestion.name;
              question.lastchange = newQuestion.lastchange;
              question.order = newQuestion.order;
              question.type = newQuestion.type;
              console.log('Question "' + newQuestion.name + '" updated in store');
            }
          });
        }
      });
    },

    updateQuestionValues: (state, action) => {
      const { id, lastchange, name, order } = action.payload;

      state.forEach((survey) => {
        survey.questions.forEach((question) => {
          question.values.forEach((value) => {
            if (value.id === id) {
              value.lastchange = lastchange;
              value.name = name;
              value.order = order;
              console.log('QuestionValue "' + name + '" updated in store');
            }
          });
        });
      });
    },

    insertQuestionValues: (state, action) => {
      const value = action.payload;

      state.forEach((survey) => {
        survey.questions.forEach((question) => {
          if (question.id === value.question.id) {
            question.values.push(value);
            console.log('QuestionValue "' + value.name + '" updated in store');

          }
        });
      });
    },

    updateAnswerValue: (state, action) => {
      const newAnswer = action.payload.answer;  
    
      state.forEach((survey) => {
        survey.questions.forEach((question) => {
          question.answers.forEach((answer) => {
            if (answer.id === newAnswer.id) {
              answer.value = newAnswer.value;
              answer.lastchange = newAnswer.lastchange;
              answer.expired = newAnswer.expired; 
              answer.aswered = newAnswer.aswered; 
              console.log('Answer "' + newAnswer.value + '" updated in store');
            }
          });
        });
      });
    },

    updateAnswerExpired: (state, action) => {
      const id = action.payload.answer.id;
      const lastchange = action.payload.answer.lastchange;
      const expired = action.payload.answer.expired;

      state.forEach((survey) => {
        survey.questions.forEach((question) => {
          question.answers.forEach((answer) => {
            if (answer.id === id) {
              answer.expired = expired;
              answer.lastchange = lastchange;
              console.log('Answer" is expired in store')
              console.log(expired);
            }
          });
        });
      });
    },
    
    updateAnswerAswered: (state, action) => {
      const newAnswer = action.payload;
      
      state.forEach((survey) => {
        survey.questions.forEach((question) => {
          question.answers.forEach((answer, index) => {
            if (answer.id === newAnswer.id) {
              question.answers[index] = newAnswer;
            }
          });
        });
      });
    },



    surveyAssignTo: (state, action) => {
      const newSurvey = action.payload;
      state.forEach((survey, index) => {
        if (survey.id === newSurvey.id) {
          state[index] = newSurvey;
          console.log('User is assigned to "' + newSurvey.name + '" in store');
        }
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
  updateAnswerExpired,
  updateAnswerAswered,

} = surveySlice.actions;

// Export the surveySlice reducer
export default surveySlice.reducer;