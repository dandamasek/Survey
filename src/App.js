import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SurveyAnswer from 'pages/SurveyAnswer';

import SurveyEditor from './pages/SurveysEditor';

function App() {

  return (
    <div className="App">
      <SurveyEditor />
      {/* <SurveyAnswer /> */}
    </div>
    
  );

}

export default App;
