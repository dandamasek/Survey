import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import SurveyNameBox from '../components/SurveyNameBox';
import SurveyQuestionTable from '../components/SurveyQuestionTable';
import AssignUsers from "../components/AssignUser";
import AssignGroups from 'components/AssignToGroup';
import { SurveyInsertButton } from '../actions/SurveyInsertButton';
import { useEffect } from 'react';
import { fetchUsers } from '../async/LoadUserDataAsync';
import { SurveyFetchAsync } from '../async/LoadSurveyDataAsync';
import { fetchGroups } from '../async/LoadGroupDataAsync';

/**
 * Component for rendering the survey editor interface.
 */
export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
  const users = useSelector(state => state.users);
  const groups = useSelector(state => state.groups);
 
  /*
  Create a dispatch function from the useDispatch hook.
  */
  const dispatch = useDispatch();

  /*
  Fetch necessary data when the component mounts.
  */
  useEffect(() => {
    dispatch(fetchGroups());
    dispatch(SurveyFetchAsync());
    dispatch(fetchUsers());
  }, [dispatch]);

  /*
  Return the JSX elements for rendering the Survey Editor interface.
  */
  return (
    <div>
      <div><h1 className="p-4 mb-2 bg-primary text-white mb-3">Survey editor</h1></div>
      
      <div className='container fluid'>
        <AssignUsers surveys={surveys} users={users} />
        <AssignGroups surveys={surveys} groups={groups} />

        {surveys.map((survey) => (
          <div className="card m-5 border-secondary mb-3" key={survey.id + "Survey"}>
            <div className='card-header bg-primary text-white'>
              <SurveyNameBox name={survey.name} id={survey.id} lastchange={survey.lastchange} />
            </div>
            <SurveyQuestionTable questions={survey.questions} surveyId={survey.id} key={survey.id + "Survey questions"} />
          </div>
        ))}
        
        <SurveyInsertButton />
      </div>
    </div>
  );
}
