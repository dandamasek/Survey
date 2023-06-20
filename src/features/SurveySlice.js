import { createSlice } from "@reduxjs/toolkit";

/**
 * Redux slice for managing the state of the surveys.
 */
export const surveySlice = createSlice({
  name: "surveys",
  initialState: [],
  reducers: {
    /**
     * Action to load surveys into the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
    loadData: (state, action) => {
      const surveys = action.payload;
      let newSurveys = [];
      let isAlreadyinStore = false;

      for (let survey of surveys) {
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

    /**
     * Action to add a new survey to the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
    addSurvey: (state, action) => {
      const newSurvey = action.payload;
      state.push(newSurvey);
      console.log('Survey "' + newSurvey.name + '" added to store');
    },

    /**
     * Action to add a new question to a survey in the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
    addQuestion: (state, action) => {
      const newQuestion = action.payload;

      state.forEach((survey) => {
        if (survey.id === newQuestion.survey.id) {
          survey.questions.push(newQuestion);
          console.log('Question "' + newQuestion.name + '" added to store');
        }
      });
    },

    /**
     * Action to update the name of a survey in the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
    updateSurveyName: (state, action) => {
      const newSurvey = action.payload;
      state.forEach((survey, index) => {
        if (survey.id === newSurvey.id) {
          survey.name = newSurvey.name;
          survey.lastchange = newSurvey.lastchange;
          console.log('Survey "' + newSurvey.name + '" updated in store');
        }
      });
    },

    /**
     * Action to update a specific question in the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
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

    /**
     * Action to update the values of a question in the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
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

    /**
     * Action to insert question values into the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
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

    /**
     * Action to update the value of an answer in the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
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

    /**
     * Action to update the expiration status of an answer in the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
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
              console.log('Answer is expired in store');
              console.log(expired);
            }
          });
        });
      });
    },

    /**
     * Action to update the answered status of an answer in the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
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

    /**
     * Action to assign a user to a survey in the state.
     * @param {Array} state - The current state.
     * @param {Object} action - The action object containing the payload.
     */
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
