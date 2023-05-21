import { authorizedFetch } from './authorizedFetch';

const GroupsSelectQueryJSON = (id, lastchange, newName) => ({
  query: `
    mutation {
      surveyUpdate(survey: {
        id: "${id}",
        lastchange: "${lastchange}",
        name: "${newName}"  }) {
        id
        msg
      }
    }
  `
});

export const SurveyNameMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupsSelectQueryJSON(props.id, props.lastchange, props.newName))
  })

