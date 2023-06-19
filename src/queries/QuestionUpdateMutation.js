import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for the QuestionUpdateMutation.
 * @param {string} lastchange - Last change timestamp of the question
 * @param {string} id - ID of the question
 * @param {string} name - Updated name for the question (optional)
 * @param {number} order - Updated order for the question (optional)
 * @param {string} type - Updated type ID for the question (optional)
 * @returns {Object} - JSON object for the mutation
 */
const QuestionUpdateMutationJSON = (lastchange,id,name,order,type) => ({
  query: `
  mutation(
    $lastchange: DateTime!, 
    $id: ID!, 
    $name: String,
    $order: Int,
    $typeId: ID,
  ) {
    questionUpdate(
      question: {
        lastchange: $lastchange, 
        id: $id, 
        name: $name,  
        order: $order,
        typeId: $typeId,
      }
    ) {
      msg
      question{
      id
      lastchange
      name
      order
      type {
        id
        name
      }
      values {
        id
        name
      }
      }
    }
  }`,
  variables: {
    lastchange: lastchange,
    id: id,
    name: name,
    order : order,
    typeId: type,
  },
});


/**
 * Executes the QuestionUpdateMutation to update a question.
 * @param {Object} props - Mutation properties
 * @param {string} props.lastchange - Last change timestamp of the question
 * @param {string} props.id - ID of the question
 * @param {string} props.name - Updated name for the question (optional)
 * @param {number} props.order - Updated order for the question (optional)
 * @param {string} props.type - Updated type ID for the question (optional)
 * @returns {Promise} - Promise with the mutation result
 */
export const QuestionUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionUpdateMutationJSON(props.lastchange,props.id,props.name,props.order,props.type))
  })
