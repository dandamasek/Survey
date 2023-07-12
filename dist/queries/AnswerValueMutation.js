import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for the AnswerValueMutation.
 *
 * @param {string} id - ID of the answer
 * @param {string} lastchange - Last change timestamp
 * @param {string} value - Updated value for the answer
 * @returns {Object} - JSON object for the mutation
 */
const AnswerValueMutationJSON = (id, lastchange, value) => ({
  query: `
  mutation ($id: ID!, $lastchange: DateTime!, $value: String) {
    answerUpdate(
      answer: {
        id: $id,
        lastchange: $lastchange,
        value: $value
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
        }
      }
    }
  }`,
  variables: {
    id: id,
    lastchange: lastchange,
    value: value
  }
});

/**
 * Executes the AnswerValueMutation to update the value of an answer.
 *
 * @param {Object} props - Mutation properties
 * @param {string} props.id - ID of the answer
 * @param {string} props.lastchange - Last change timestamp
 * @param {string} props.value - Updated value for the answer
 * @returns {Promise} - Promise with the mutation result
 */
export const AnswerValueMutation = props => authorizedFetch('/gql', {
  body: JSON.stringify(AnswerValueMutationJSON(props.id, props.lastchange, props.value))
});