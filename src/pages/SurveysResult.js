import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/ButtonSurveySelect';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyTable from 'components/SurveyTable';
import ShowAnswersButton from 'components/ButtonShowAnswers';


export default function SurveyResult() {
  const surveys = useSelector(state => state.surveys);

  return (
    <div class="container ">
      <SurveySelect/>
      <ShowAnswersButton></ShowAnswersButton>
      <table className='table table-bordered '> 
        { surveys.map((survey)=> 
          <tbody>
            
             
            
           
          </tbody>

        )}
      </table>
    </div>
  );
}