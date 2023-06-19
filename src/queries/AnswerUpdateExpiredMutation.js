import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for the AnswerUpdateExpiredMutation.
 * @param {string} id - ID of the answer
 * @param {string} lastchange - Last change timestamp
 * @param {boolean} expired - Expiration status
 * @returns {Object} - JSON object for the mutation
 */
const AnswerUpdateExpiredMutationJSON = (id, lastchange, expired) => ({
  query: `
  mutation {
    answerUpdate(
      answer: {
        id: "${id}",
        lastchange: "${lastchange}",
        expired: ${expired}}) {
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
        }
      }
    }
  }`
});

/**
 * Executes the AnswerUpdateExpiredMutation to update the expiration status of an answer.
 * @param {Object} props - Mutation properties
 * @param {string} props.id - ID of the answer
 * @param {string} props.lastchange - Last change timestamp
 * @param {boolean} props.expired - Expiration status
 * @returns {Promise} - Promise with the mutation result
 */
export const AnswerUpdateExpiredMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(AnswerUpdateExpiredMutationJSON(props.id, props.lastchange, props.expired))
  });

