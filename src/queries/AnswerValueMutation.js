import { authorizedFetch } from './authorizedFetch';

const GroupsSelectQueryJSON = (id, lastchange, value) => ({
  query: `
  mutation {
    answerUpdate(
      answer: {
        id: "${id}",
        lastchange: "${lastchange}",
        value: "${value}"}
    ) {
      id
      msg
      answer {
        id
        lastchange
        value
      }
    }
  }`
});

export const AnswerValueMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupsSelectQueryJSON(props.id, props.lastchange, props.value))
  })
