import React from 'react';
import './App.css';
import SortingDropDown from './components/atoms/SortingDropDown/SortingDropDown'
import FilterSection from './components/organisms/FilterSection/FilterSection'
import DisplaySection from './components/organisms/DisplaySection/DisplaySection'

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <FilterSection />
        <DisplaySection />
        <SortingDropDown />

      </div>
    );
  }
}

export default App;
