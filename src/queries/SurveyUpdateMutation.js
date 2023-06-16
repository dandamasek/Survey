import { authorizedFetch } from './authorizedFetch';
/**
 * Function that returns the SurveyUpdateMutationJSON in JSON format.
 */
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
/*
  Sends a mutation request to update a survey
 */
export const SurveyUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(SurveyUpdateMutationJSON(props.id, props.lastchange, props.newName))
  })

