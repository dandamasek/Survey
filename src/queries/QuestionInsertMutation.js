import { authorizedFetch } from './authorizedFetch';

const GroupsSelectQueryJSON = (name,surveyId,typeId,order) => ({
  query: `
  mutation {
    questionInsert (question:{
    name:"${name}",
    surveyId:"${surveyId}",
    typeId:"${typeId}",
    order:${order}
    }) {
      msg
    }
  }
  `
});

export const questionInsertMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupsSelectQueryJSON(props.name, props.surveyId, props.typeId, props.order)),
  })

