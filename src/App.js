import React from 'react';
import './App.css';
import AddDynamicInput from './components/InputBoxName';
import ShowQuestion from './components/ShowQuestion';
import { Provider } from 'react-redux';
import store from './redux/store';

import CakeCotainer from './components/CakeCotainer';

function App() {
  return (
    
      <Provider store={store}>
        <div className="App">
          <CakeCotainer />
        </div>
      </Provider>
    
  );
}

export default App;
