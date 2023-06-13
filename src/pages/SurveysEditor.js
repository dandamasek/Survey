
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import SurveyNameBox from '../components/SurveyNameBox';
import SurveyQuestionTable from '../components/SurveyQuestionTable';
import AssignUsers from "../components/AssignUser";
import { SurveyInsertButton } from '../actions/SurveyInsertButton';
import { useEffect } from 'react';
import { fetchUsers } from '../actions/LoadUserDataAsync';
import { SurveyFetchAsync } from '../actions/LoadSurveyDataAsync';
import { fetchGroups } from '../actions/LoadGroupDataAsync';

export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
  const users =  useSelector(state => state.users);
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGroups());
    dispatch(SurveyFetchAsync());
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <div><h1 className="p-4 mb-2 bg-primary text-white">Survey editor</h1></div>
      
      <div className='container fluid'>
        <AssignUsers surveys={surveys} users={users} />

        {surveys.map((survey) => (
          <div className="card m-5 border-secondary" key={survey.id + "Survey"}>
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