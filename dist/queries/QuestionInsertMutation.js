import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for the QuestionInsertMutation.
 * @param {string} name - Name of the question
 * @param {string} surveyId - ID of the survey
 * @param {string} typeId - ID of the question type (optional)
 * @param {number} order - Order of the question (optional)
 * @returns {Object} - JSON object for the mutation
 */
const QuestionInsertMutationJSON = (name, surveyId, typeId, order) => ({
  query: `
  mutation($name: String!, $surveyId: ID!, $typeId: ID, $order: Int) {
    questionInsert(question: {
      name: $name,
      surveyId: $surveyId,
      typeId: $typeId,
      order: $order
    }) {
      id
      msg
      question {
        id
        lastchange
        name
        order
        type {
          id
          name
        }
        values {
          name
        }
        survey {
          id
        }
        answers {
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
    }
  }
  `,
  variables: {
    name: name,
    surveyId: surveyId,
    typeId: typeId,
    order: order
  }
});

/**
 * Executes the QuestionInsertMutation to insert a new question.
 * @param {Object} props - Mutation properties
 * @param {string} props.name - Name of the question
 * @param {string} props.surveyId - ID of the survey
 * @param {string} props.typeId - ID of the question type (optional)
 * @param {number} props.order - Order of the question (optional)
 * @returns {Promise} - Promise with the mutation result
 */
export const QuestionInsertMutation = props => authorizedFetch('/gql', {
  body: JSON.stringify(QuestionInsertMutationJSON(props.name, props.surveyId, props.typeId, props.order))
});