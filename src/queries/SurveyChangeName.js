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

export const SurveyChangeName = (props) => {
  const { id, lastchange, newName } = props;
  console.log("SurveyChangeNameprops",props);
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupsSelectQueryJSON(id, lastchange, newName))
  })
}
