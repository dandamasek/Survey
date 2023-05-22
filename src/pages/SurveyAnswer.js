import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/ButtonSurveySelect';
import AnsweringTable from 'components/AnsweringTable';
import {UserTable} from 'components/UserTable';

export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
  const currentUser = {id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003",email: "julia.newbie@world.com"} //2d9dc868-a4a2-11ed-b9df-0242ac120003   2d9dc5ca-a4a2-11ed-b9df-0242ac120003

  return (
    <div class = "form-group">
      <SurveySelect />
      <table className='table'> 

      <thead>  
         <UserTable currentUser={currentUser}/>
      </thead>

      <tbody>
            { surveys.map((survey)=> 
              <AnsweringTable questions={survey.questions} currentUser={currentUser}/> 
            )}
      </tbody>

      </table>
    </div>
  );
}
