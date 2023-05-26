import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector} from 'react-redux';
import {ButtonSurveySelect} from '../actions/ButtonSurveySelect';
import QuestionAnswerTable from '../components/QuestionAnswerTable';
import {UserTable} from 'components/UserTable';

export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
  const currentUser = {id: "2d9dc5ca-a4a2-11ed-b9df-0242ac120003",email: "julia.newbie@world.com"} //2d9dc868-a4a2-11ed-b9df-0242ac120003   2d9dc5ca-a4a2-11ed-b9df-0242ac120003

  return (
    <div className = "form-group">
      <ButtonSurveySelect />
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
