import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/SurveySelect';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyQuestionTable from 'components/SurveyQuestionTable';
export default function SurveyEditor() {

  const surveys = useSelector(state => state.surveys);
  console.log("SurveyEditor",surveys);
  
  return (
    <div>
      <SurveySelect />
      <table className='table'> 
        { surveys.map((survey)=> 
          <tbody>
            <SurveyNameBox key={survey.id} name={survey.name} id={survey.id} lastchange={survey.lastchange} /> 

            <SurveyQuestionTable questions={survey.questions}/> 
          </tbody>
        )}
      </table>
    </div>
  );
}
