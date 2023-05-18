import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector, useDispatch } from 'react-redux';
import {SurveySelect} from '../components/SurveySelect';
import { useEffect } from 'react';
import { loadData } from '../features/SurveySlice';

export default function SurveyEditor() {

  const surveys = useSelector(state => state.surveys);


  return (
    <div>
     
          <SurveySelect />
        </div>
  );
}
