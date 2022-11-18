import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FeelingList from '../FeelingList';
import FeelingDetail from '../FeelingDetail';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <FeelingList />
          <FeelingDetail />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
