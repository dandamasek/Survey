import { authorizedFetch } from './authorizedFetch';

/*
Function that returns the questionInsertMutationJSON in JSON format.
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

/*
Sends a mutation request to insert a new question.
*/
export const QuestionInsertMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(QuestionInsertMutationJSON(props.name, props.surveyId, props.typeId, props.order))
  });
