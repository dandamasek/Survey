import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';

import './App.css';
import AddDynamicInput from './components/InputBoxName';

import HooksCakeContainer from './components/HooksCakeContainer';
import IceCreamContaine from './components/IceCreamContainer';
import NewCakeContainer from './components/NewCakeContainer';
import ItemContainer from './components/ItemContainer';

import CreateQuestion from './components/CreateQuestion';
import CreateQuestions from './components/CreateQuestions';

function App() {


  return (
    
    <div className="App">
    <CreateQuestions />

    </div>
      
      // <Provider store={store}>
      //   <div className="App">
      //     {/* <ItemContainer cake/>
      //     <ItemContainer />
      
      //     <HooksCakeContainer /> 
      //     <CakeCotainer />
      //     <IceCreamContaine />  */}
      //     {/* <NewCakeContainer /> */}
      //     {/* <CreateQuestions /> */}
      //   </div>
      // </Provider>
    
  );
}

export default App;
