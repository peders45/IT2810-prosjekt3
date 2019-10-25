import React, { useState } from 'react';
import './SearchField.css';
import '../../../App'
import { searchForItem }  from "../../../state/actions/searchActions";
import { connect } from 'react-redux'

//Input field and button for text search
const SearchField = ({ searchForItem }) => {
  const handleKeyPressEnter = (event) => {
    if(event.key === "Enter"){
      searchForItem(input);
    }
  }
  const [ input, setInput ] = useState([]);
    return(
        <div className="searchField">
          <input
          className="input"
          name="search"
          type="text"
          placeholder="Search for menu items..."
          onChange={(event) => setInput(event.target.value)}
          onKeyPress={(event) => handleKeyPressEnter(event)}
          />
          <input type="button" className="searchButton" onClick={() => searchForItem(input)} value="Search"/>
        </div>
    );
};

//Dispatching actions to the store
const mapDispatchToProps = {
  searchForItem
 };

//Connect the store to this component
export default connect(null, mapDispatchToProps)(SearchField)
