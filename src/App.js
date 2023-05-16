import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import 'bootstrap/dist/css/bootstrap.min.css';


import './App.css';
import AddDynamicInput from './components/InputBoxName';

import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContaine from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

import CreateQuestion from './components/CreateQuestion';
import CreateQuestions from './components/CreateQuestions';

import CreateQuestionContainer from './components/CreateQuestionContainer';

function App() {


  return (
    <div className="App">
      <CreateQuestions />
    </div>
  );
}

export default App;
