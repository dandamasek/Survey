import { authorizedFetch } from '../queries/authorizedFetch';

const GroupsSelectQueryJSON = (id, lastchange, newName) => ({
  query: `
    mutation {
      surveyUpdate(survey: {
        id: "${id}",
        lastchange: "${lastchange}",
        name: "${newName}"
      }) {
        id
        msg
      }
    }
  `
});

export const SurveyChangeName = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupsSelectQueryJSON(props.id, props.lastchange, props.newName))
  })

