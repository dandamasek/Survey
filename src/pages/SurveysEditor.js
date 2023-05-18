import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { loadData } from '../features/SurveySlice';
import {store} from '../redux/store';

function SurveysEditor() {
  
  const [surveys, SetSurveys] = useState([])
  
  // Loading data from server to redux
  const dispacth = useDispatch() 

  const LoadData = () => {
    dispacth(loadData(surveys))
    console.log("Data loaded")

  }

  return(
    <div>
      <button type="button" onClick={LoadData}>HI </button> 
    </div>
  )
}

export default SurveysEditor
