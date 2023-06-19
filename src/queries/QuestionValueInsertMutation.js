import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for the QuestionValueInsertMutation.
 * @param {string} questionId - ID of the question
 * @param {string} nameValue - Name value for the new question value
 * @param {number} order - Order for the new question value (optional)
 * @returns {Object} - JSON object for the mutation
 */
const QuestionValueInsertJSON = (questionId,nameValue,order) => ({
  query: `
  mutation(
    $questionId: ID!,
    $name: String!,
    $order: Int,
  ) {
    questionValueInsert(questionValue:{
      questionId: $questionId,
      name: $name,
      order: $order
    }){
      msg
      id
      question
      {
        id
        lastchange
        name
        nameEn
        order
        question {
          id
          lastchange
          name
          order        
         
        }
      }
    }
  } `,
  variables: {
    questionId: questionId,
    name: nameValue,
    order: order
  }
});

/**
 * Sends a mutation request to insert a new question value.
 * @param {Object} props - Mutation properties
 * @param {string} props.questionId - ID of the question
 * @param {string} props.nameValue - Name value for the new question value
 * @param {number} props.order - Order for the new question value (optional)
 * @returns {Promise} - Promise with the mutation result
 */
export const QuestionValueInsertMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionValueInsertJSON(props.questionId, props.nameValue, props.order))
  })