import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { loadData } from '../features/SurveySlice';
import {store} from '../redux/store';

function SurveysEditor() {
  
  // const [surveys, SetSurveys] = useState([])
  
  // Loading data from server to redux

  const dispacth = useDispatch() 
  console.log("reload")

  

  return(
    <div>
      <button type="button" onClick={() => {dispacth(loadData())}}>HI </button> 
    </div>
  )
}

export default SurveysEditor
