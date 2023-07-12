import { authorizedFetch } from './authorizedFetch';

/**
 * Generates the JSON object for the QuestionValueUpdateMutation.
 * @param {string} lastchange - Last change timestamp of the question value
 * @param {string} id - ID of the question value to update
 * @param {string} name - New name value for the question value (optional)
 * @param {number} order - New order value for the question value (optional)
 * @returns {Object} - JSON object for the mutation
 */
const QuestionValueUpdateJSON = (lastchange, id, name, order) => ({
  query: `
  mutation(
    $lastchange: DateTime!,
    $id: ID!,
    $name: String,
    $order: Int,  
  ){

    questionValueUpdate(questionValue:
      {
        lastchange: $lastchange,
        id: $id,
        name: $name, 
        order: $order })
        {
          msg
          id
          question
            {
              id
              lastchange
              name
              order
            }
        }
  }`,
  variables: {
    lastchange: lastchange,
    id: id,
    name: name,
    order: order
  }
});

/**
 * Sends a mutation request to update a question value.
 * @param {Object} props - Mutation properties
 * @param {string} props.lastchange - Last change timestamp of the question value
 * @param {string} props.id - ID of the question value to update
 * @param {string} props.name - New name value for the question value (optional)
 * @param {number} props.order - New order value for the question value (optional)
 * @returns {Promise} - Promise with the mutation result
 */
export const QuestionValueUpdateMutation = props => authorizedFetch('/gql', {
  body: JSON.stringify(QuestionValueUpdateJSON(props.lastchange, props.id, props.name, props.order))
});