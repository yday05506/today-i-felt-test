import React from 'react';
import FeelingList from '../FeelingList';
import FeelingDetail from '../FeelingDetail';
import './style.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <FeelingList />
        <FeelingDetail />
      </div>
    );
  }
}

export default App;
