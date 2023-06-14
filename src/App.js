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
<<<<<<< HEAD
    {/* <SurveyResult />       */}
=======
    <SurveyResult />      
>>>>>>> 3e3cc1238ac7bd05444c8f1cd123e141aed81811
      
    </div>
        
  );

}

export default App;
