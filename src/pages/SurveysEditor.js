import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import SurveyNameBox from '../components/SurveyNameBox';
import SurveyQuestionTable from '../components/SurveyQuestionTable';
import AssignUsers from "../components/AssignUser";
import AssignGroups from 'components/AssignToGroup';
import { SurveyInsertButton } from '../actions/SurveyInsertButton';
import { useEffect } from 'react';
import { fetchUsers } from '../actions/LoadUserDataAsync';
import { SurveyFetchAsync } from '../actions/LoadSurveyDataAsync';
import { fetchGroups } from '../actions/LoadGroupDataAsync';

export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys); // Select surveys from the Redux store
  const users = useSelector(state => state.users); // Select users from the Redux store
  const groups = useSelector(state => state.groups); // Select groups from the Redux store
  
  const dispatch = useDispatch(); // Create a dispatch function from the useDispatch hook

  useEffect(() => {
    dispatch(fetchGroups()); // Fetch group data when the component mounts
    dispatch(SurveyFetchAsync()); // Fetch survey data when the component mounts
    dispatch(fetchUsers()); // Fetch user data when the component mounts
  }, [dispatch]);

  return (
    <div>
      <div><h1 className="p-4 mb-2 bg-primary text-white">Survey editor</h1></div>
      
      <div className='container fluid'>
        <AssignUsers surveys={surveys} users={users} /> {/* Render the AssignUsers component */}
        <AssignGroups surveys={surveys} groups={groups} /> {/* Render the AssignGroups component */}

        {/* Iterate over surveys and render the SurveyNameBox and SurveyQuestionTable */}
        {surveys.map((survey) => (
          <div className="card m-5 border-secondary" key={survey.id + "Survey"}>
            <div className='card-header bg-primary text-white'>
              <SurveyNameBox name={survey.name} id={survey.id} lastchange={survey.lastchange} /> {/* Render the SurveyNameBox component */}
            </div>
            <SurveyQuestionTable questions={survey.questions} surveyId={survey.id} key={survey.id + "Survey questions"} /> {/* Render the SurveyQuestionTable component */}
          </div>
        ))}
        
        <SurveyInsertButton /> {/* Render the SurveyInsertButton */}
      </div>
    </div>
  );
}