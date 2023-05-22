import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/ButtonSurveySelect';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyTable from 'components/SurveyTable';


export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);

  return (
    <div class="form-group">
      <SurveySelect />
      <table className='table'> 
        { surveys.map((survey)=> 
          <tbody>
            <SurveyNameBox key={survey.id} name={survey.name} id={survey.id} lastchange={survey.lastchange} /> 

            <SurveyTable questions={survey.questions}/> 
          </tbody>
        )}
      </table>
    </div>
  );
}
