import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


import CreateQuestions from './components/CreateQuestions';

import Surveys from 'pages/Surveys';
function App() {


  return (
    <div className="App">
      {/* <CreateQuestions /> */}
      <Surveys />
      
    </div>
  );
}

export default App;
