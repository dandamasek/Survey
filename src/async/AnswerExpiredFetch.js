import { updateAnswerExpired } from 'features/SurveySlice';
import { AnswerUpdateExpiredMutation } from '../queries/AnswerUpdateExpiredMutation';

/**
 * Action creator function to fetch and update expired answers.
 * @param {Object} props - The component props.
 * @returns {Function} - The async action function.
 */
export const AnswerExpiredFetch = (props) => (dispatch, getState) => (
  props.questions.forEach((question) => {
    question.answers.forEach((answer) => {
      /*
      Call the AnswerUpdateExpiredMutation function with answer details
      */
      AnswerUpdateExpiredMutation({ id: answer.id, lastchange: answer.lastchange, expired: true })
        .then(response => response.json())
        .then(json => {
          const newAnswer = json.data?.answerUpdate.answer;
          if (newAnswer) {
            dispatch(updateAnswerExpired({ answer: newAnswer }));
            console.log('Answer closed on server');
          }
          return json;
        })
    })
  })
);

