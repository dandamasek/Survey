import { authorizedFetch } from './authorizedFetch';


/**
 * Function that returns the SurveyUpdateMutationJSON in JSON format.
 * @param {string} id - The ID of the survey
 * @param {string} lastchange - The last change timestamp of the survey
 * @param {string} newName - The new name for the survey
 * @returns {Object} - JSON object for the survey update mutation
 */
const SurveyUpdateMutationJSON = (id, lastchange, newName) => ({
  query: `
    mutation (
      $id: ID!,
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

/**
 * Sends a mutation request to update a survey.
 * @param {Object} props - Object containing the id, lastchange, and newName of the survey
 * @returns {Promise} - Promise with the survey update mutation result
 */
export const SurveyUpdateMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(SurveyUpdateMutationJSON(props.id, props.lastchange, props.newName))
  })

