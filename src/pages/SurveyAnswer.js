import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch} from 'react-redux';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect } from 'react';
import QuestionAnswerTable from '../components/QuestionAnswerTable';
import {UserTable} from 'components/UserTable';
import { fetchUsers } from 'actions/LoadUserDataAsync';

export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
  const users =  useSelector(state => state.users);
  
  const currentUser = {id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003",email: "julia.newbie@world.com"} //2d9dc868-a4a2-11ed-b9df-0242ac120003   2d9dc5ca-a4a2-11ed-b9df-0242ac120003
  const dispatch = useDispatch()
  useEffect(() => {
   dispatch(SurveyFetchAsync())
   
    
  }, []);
  return (
    <div>
      <div><h1 className="p-4 mb-2 bg-primary text-white">Survey answer</h1></div>
      
      <div className='container-fluid' >  
          <UserTable currentUser={currentUser} />
               
          { 
            surveys.map((survey)=>  
            <div className='card m-5 border-secondary' key={survey.id+"Survey answer table"}>
              <div className='card-header bg-primary text-white'>
                <h1>{survey.name}</h1>
              </div>
              
              <QuestionAnswerTable questions={survey.questions}  currentUser={currentUser}/> 

            </div>
          )}

        </div>
        </div>
   
  );
}
