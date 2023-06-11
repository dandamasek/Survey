import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyQuestionTable from 'components/SurveyQuestionTable';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect } from 'react';
import { fetchUsers } from 'actions/LoadUserDataAsync';
import AssignUsers from "components/AssignUser";
import { SurveyInsertButton } from 'actions/SurveyInsertButton';

export default function SurveyEditor() {

  // Data from store
  const surveys = useSelector(state => state.surveys);
  const users =  useSelector(state => state.users);
  const dispatch = useDispatch();

  // geting data from store
  useEffect(() => {
    dispatch(SurveyFetchAsync())
    dispatch(fetchUsers())
  }, [dispatch]);
  
  return (

      // table for editing surveys

      <div>
        {/* page header */}
        <div><h1 className="p-4 mb-2 bg-primary text-white">Survey editor</h1></div>

        <div className='container fluid'> 

        {/* Component for assigning user to survey */}
        <AssignUsers surveys={surveys} users={users}  />

        {/* Render surveys cards */}
        { surveys.map((survey)=> 

          <div className="card m-5 border-secondary" key={survey.id+"Survey"}> 
          
            {/* Card header = name survey and change name button*/}
            <div className='card-header bg-primary text-white'>
              <SurveyNameBox name={survey.name} id={survey.id} lastchange={survey.lastchange}/>  
            </div>

            {/* Showing questions of survey and change question button*/}
              <SurveyQuestionTable questions={survey.questions} surveyId={survey.id} key={survey.id+"Survey questions"}/>  
            {/* Button which assigns user to survey */}
        
          </div>
        )}

        <SurveyInsertButton />



        </div>
      </div>
  );
}
