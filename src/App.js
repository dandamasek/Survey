import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SurveyAnswer from 'pages/SurveyAnswer';
import SurveyResult from 'pages/SurveysResult';
import SurveyEditor from './pages/SurveysEditor';

function App() {

  return (
    <div className="App">
    
    {/* Pages for different tasks, Editing survey, answering to assigned survey, results from answers */}
    <SurveyEditor /> 
    <SurveyAnswer />
    <SurveyResult />      

    </div>
        
  );

}

export default App;
