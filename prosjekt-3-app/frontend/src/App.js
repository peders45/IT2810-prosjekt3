import React from 'react';
import './App.css';
import SearchField from './components/atoms/SearchField/SearchField'

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <SearchField/>
      </div>
    );
  }
}

export default App;
