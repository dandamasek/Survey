import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/ButtonSurveySelect';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyTable from 'components/SurveyTable';


export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);

  return (
    <div class="container ">
      <SurveySelect />
      <table className='table table-bordered '> 
        { surveys.map((survey)=> 
          <tbody>
            
             <table class ="table table-bordered">
           <SurveyNameBox key={survey.id} name={survey.name} id={survey.id} lastchange={survey.lastchange} /> 
           </table>
           
            <table class = "table table-bordered">
            <SurveyTable questions={survey.questions}/> 
            </table>
            <ButtonSurveyAssignToUser userId={props.currentUser.id} surveyId={props.surveyId}/>
           
          </tbody>

        )}
      </table>
    </div>
  );
}
