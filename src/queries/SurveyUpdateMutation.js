import { authorizedFetch } from './authorizedFetch';
/**
 * Function that returns the SurveyUpdateMutationJSON in JSON format.
 */
const SurveyUpdateMutationJSON = (id, lastchange, newName) => ({
  query: `
    mutation (
      $id: String,
      $lastchange: DateTime!,
      $name: String,
    ){
      surveyUpdate(survey: {
        id: $id,
        lastchange: $lastchange,
        name: $name, }) {
        msg
        survey {
          id
          lastchange
          name
        }
      }
    }
  `, variables: {
      id: id,
      lastchange: lastchange,
      name: newName
  }
});
/*
  Sends a mutation request to update a survey
 */
export const SurveyUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(SurveyUpdateMutationJSON(props.id, props.lastchange, props.newName))
  })

