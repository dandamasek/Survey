import { authorizedFetch } from './authorizedFetch';

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
/*
Perform a mutation to update the answer's expiration status
*/
export const AnswerUpdateExpiredMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(AnswerUpdateExpiredMutationJSON(props.id, props.lastchange, props.expired))
  });

