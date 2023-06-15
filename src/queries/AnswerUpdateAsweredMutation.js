import { authorizedFetch } from './authorizedFetch';

const AnswerUpdateAsweredMutationJSON = (id, lastchange, aswered) => ({
  query: `
  mutation {
    answerUpdate(
      answer: {
        lastchange: "${lastchange}",
        id: "${id}",
        aswered: ${aswered}}) {
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
  }`
});

export const AnswerUpdateAsweredMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(AnswerUpdateAsweredMutationJSON(props.id, props.lastchange, props.aswered))
  })

