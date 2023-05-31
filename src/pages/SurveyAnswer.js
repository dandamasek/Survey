import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch} from 'react-redux';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect } from 'react';
import QuestionAnswerTable from '../components/QuestionAnswerTable';
import {UserTable} from 'components/UserTable';

export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
  const currentUser = {id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003",email: "julia.newbie@world.com"} //2d9dc868-a4a2-11ed-b9df-0242ac120003   2d9dc5ca-a4a2-11ed-b9df-0242ac120003
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(SurveyFetchAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className = "form-group">
     
      <table className='table' > 

      <thead>  
         <UserTable currentUser={currentUser} key={"User table"}/>
      </thead>

      <tbody>
            { surveys.map((survey)=>  
                <QuestionAnswerTable questions={survey.questions} currentUser={currentUser}/> 
            )}

      </tbody>
      </table>
    </div>
  );
}
