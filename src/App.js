import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SurveyAnswer from 'pages/SurveyAnswer';
import SurveyResult from 'pages/SurveysResult';
import SurveyEditor from './pages/SurveysEditor';

function App() {

  return (
    <div className="App">
    
    <SurveyEditor /> 
    <SurveyAnswer />
        <SurveyResult />      
      
    </div>
        
  );

}

export default App;
