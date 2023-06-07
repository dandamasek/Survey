import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyQuestionTable from 'components/SurveyQuestionTable';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect } from 'react';
import { fetchUsers } from 'actions/LoadUserDataAsync';
import UserDropdown from "components/AssignUser";


export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
  const users =  useSelector(state => state.users);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SurveyFetchAsync())
    dispatch(fetchUsers())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
      // table for editing surveys
      <div className='container fluid'> 

      <div><h1 className="p-4 mb-2 bg-primary text-white">Survey editor</h1></div>
      <UserDropdown />
        { surveys.map((survey)=> 

          <div className="card m-5 border-secondary" key={survey.id+"Survey"}> 
           
            {/* Showing name of survey and change name button*/}
            <div className='card-header bg-primary text-white'>
            <SurveyNameBox key={survey.id+"Survey name"} name={survey.name} id={survey.id} lastchange={survey.lastchange} />  
            </div>

          {/* Showing questions of survey and change question button*/}
          <SurveyQuestionTable questions={survey.questions} surveyId={survey.id} key={survey.id+"Survey questions"}/>  
            {/* Button which assigns user to survey */}
        
          </div>
        )}
      </div>
  );
}
