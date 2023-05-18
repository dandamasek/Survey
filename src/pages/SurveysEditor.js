import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/SurveySelect';
import SurveyInputBox from '../components/SurveyInputBox';
import QuestionRender from 'components/SurveyQuestionTable';
export default function SurveyEditor() {

  const surveys = useSelector(state => state.surveys);




  return (

    <div>

        <SurveySelect />

      <table>
        <thead>
          <tr>
            <th>
              surveys name 
            </th>
          </tr>
        </thead>
        <tbody>
          { surveys.map((survey)=> 
            // <tr> {survey.name} </tr>
            <table>
            <tr>
            <td> <SurveyInputBox name={survey.name} /> </td>
            </tr>
            <tr>
              <td> <QuestionRender questions={survey.questions} /> </td>
            </tr>
          </table>
          )}
          
        </tbody>
      </table>
    </div>
  );
}
