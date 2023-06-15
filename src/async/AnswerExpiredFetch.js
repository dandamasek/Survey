import { updateAnswerExpired } from 'features/SurveySlice';
import { AnswerUpdateExpiredMutation } from '../queries/AnswerUpdateExpiredMutation';

// Action creator function
export const AnswerExpiredFetch = (props) => (dispatch, getState) => {
  // Iterate through each question in the props
  props.questions.forEach((question) => {
    // Iterate through each answer in the question
    question.answers.forEach((answer) => {

      // Call the AnswerUpdateExpiredMutation function with answer details
      AnswerUpdateExpiredMutation({ id: answer.id, lastchange: answer.lastchange, expired: true })
        .then(response => response.json())
        .then(json => {
          // Extract the projects data from the JSON response
          const newAnswer = json.data?.answerUpdate.answer;

          // If a new answer is received from the server, dispatch the updateAnswerExpired action
          if (newAnswer) {
            dispatch(updateAnswerExpired({ answer: newAnswer }));
            console.log('Answer closed on server');
          }

          return json;
        });

    });
  });
};
