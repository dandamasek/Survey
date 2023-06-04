import { authorizedFetch } from './authorizedFetch';

const SurveyUpdateMutationJSON = (id, lastchange, newName) => ({
  query: `
    mutation {
      surveyUpdate(survey: {
        id: "${id}",
        lastchange: "${lastchange}",
        name: "${newName}"  }) {
        msg
        survey {
          id
          lastchange
          name
        }
      }
    }
  `
});

export const SurveyUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(SurveyUpdateMutationJSON(props.id, props.lastchange, props.newName))
  })
