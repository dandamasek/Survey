import { authorizedFetch } from './authorizedFetch';

const GroupsSelectQueryJSON = (surveyId,userId) => ({
  query: `
    mutation {
      surveyAssignTo(survey: {
        surveyId: "${surveyId}",
        userId:"${userId}")
        id
        msg
      }
    }
  `
});

export const surveyAssignToMutation = (props) => 
  authorizedFetch('/gql', {
    body: JSON.stringify(GroupsSelectQueryJSON(props.surveyId, props.userId))
  })

