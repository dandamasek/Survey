import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyQuestionTable from 'components/SurveyQuestionTable';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect } from 'react';
import { SurveyAssignToUserButton } from 'actions/SurveyAssignToUserButton';
import { fetchUsers } from 'actions/LoadUserDataAsync';
import {AssignUserr} from "components/AssignUser";

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
      <table className='table table-bordered' key={"Survey table"}> 
        { surveys.map((survey)=> 
          <tbody key={survey.id+"Survey tbody"}>

          {/* Showing name of survey and change name button*/}
          <SurveyNameBox key={survey.id+"Survey name"} name={survey.name} id={survey.id} lastchange={survey.lastchange} />  

          {/* Showing questions of survey and change question button*/}
          <SurveyQuestionTable questions={survey.questions} surveyId={survey.id} key={survey.id+"Survey questions"}/>  
            {/* Button which assigns user to survey */}
         
          </tbody>
        )}
      </table>
  );
}
