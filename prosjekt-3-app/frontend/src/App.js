import React from 'react';
import './App.css';
import SearchField from './components/atoms/SearchField/SearchField'
import CategoryCheckbox from './components/atoms/CategoryCheckbox/CategoryCheckbox'

class App extends React.Component{

  render() {
    return (
      <div className="App">
        <SearchField />
        <CategoryCheckbox category="Drinks" />
        <CategoryCheckbox category="Breakfast" />
        <CategoryCheckbox category="Dessert" />
      </div>
    );
  }
}

export default App;
