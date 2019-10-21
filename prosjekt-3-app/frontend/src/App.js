import React from 'react';
import './App.css';
import SortingDropDown from './components/atoms/SortingDropDown/SortingDropDown'
import FilterSection from './components/organisms/FilterSection/FilterSection'
import DisplaySection from './components/organisms/DisplaySection/DisplaySection'
import StarRating from './components/atoms/StarRating/StarRating';

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <FilterSection />
        <StarRating />
        <DisplaySection />
        <SortingDropDown />
      
      </div>
    );
  }
}

export default App;
