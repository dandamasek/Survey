import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import  SurveyNameBox from '../components/SurveyNameBox';
import SurveyTable from 'components/SurveyTable';
import { SurveyFetchAsync } from 'actions/LoadSurveyDataAsync';
import { useEffect } from 'react';


export default function SurveyEditor() {
  const surveys = useSelector(state => state.surveys);
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(SurveyFetchAsync())
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div class="container ">
      <table className='table table-bordered '> 
        { surveys.map((survey)=> 
          <tbody>
            <Card>

            </Card>
             <table class ="table table-bordered">
           <SurveyNameBox key={survey.id} name={survey.name} id={survey.id} lastchange={survey.lastchange} /> 
           </table>
           
            <table class = "table table-bordered">
            <SurveyTable questions={survey.questions}/> 
            </table>
            
           
          </tbody>

        )}
      </table>
    </div>
  );
}
