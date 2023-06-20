import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for the AnswerUpdateAsweredMutation.
 *
 * @param {string} id - ID of the answer
 * @param {string} lastchange - Last change timestamp
 * @param {boolean} aswered - Answered status
 * @returns {Object} - JSON object for the mutation
 */
const AnswerUpdateAsweredMutationJSON = (id, lastchange, aswered) => ({
  query: `
  mutation ($id: ID!, $lastchange: DateTime!, $aswered: Boolean) {
    answerUpdate(
      answer: {
        id: $id,
        lastchange: $lastchange,
        aswered: $aswered
      }) {
      id
      msg
      answer {
        id
        lastchange
        value
        aswered
        expired
        user {
          id
          name
          email
        }
      }
    }
  }`,
  variables: {
    id: id,
    lastchange: lastchange,
    aswered: aswered
  }
});

/**
 * Executes the AnswerUpdateAsweredMutation to update the answered status of an answer.
 *
 * @param {Object} props - Mutation properties
 * @param {string} props.id - ID of the answer
 * @param {string} props.lastchange - Last change timestamp
 * @param {boolean} props.aswered - Answered status
 * @returns {Promise} - Promise with the mutation result
 */
export const AnswerUpdateAsweredMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(AnswerUpdateAsweredMutationJSON(props.id, props.lastchange, props.aswered))
  });
