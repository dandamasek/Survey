import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/SurveySelect';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyQuestionTable from 'components/SurveyQuestionTable';
export default function SurveyEditor() {

  const surveys = useSelector(state => state.surveys);


  const newName = "Studentské hodnocení 2024"

  return (

    <div>

        <SurveySelect />
      <table className='table'>
        
          { surveys.map((survey)=> 
            <tbody>
              <SurveyNameBox key={survey.id} name={survey.name} id={survey.id} lastchange={survey.lastchange} newName={newName} /> 

              <SurveyQuestionTable questions={survey.questions}/> 
            </tbody>
          )}
          
        
      </table>
    </div>
  );
}
