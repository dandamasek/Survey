import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/SurveySelect';
import { useEffect } from 'react';
import { loadData, surveySlice } from '../features/SurveySlice';

export default function SurveyEditor() {

  const surveys = useSelector(state => state.surveys);




  return (

    <div>
      <table>
        <thead>
          <tr>
            <th>
              surveys name 
            </th>
          </tr>
        </thead>
        <tbody>
          { surveys.map((survey)=> <tr> {survey.name} </tr>)}
          
        </tbody>
      </table>

          <SurveySelect />
          {surveys.name}
    </div>
  );
}
