import React, { useState } from 'react';
import './SearchField.css';
import '../../../App'
import { searchForItem }  from "../../../state/actions/searchActions";
import { connect } from 'react-redux'


//Input field and button to search for key words
const SearchField = ({ searchForItem }) => {
  const [ input, setInput ] = useState([]);

    return(
        <div className="searchField">
          <input
          className="input"
          name="search"
          type="text"
          placeholder="Search for menu items..."
          onChange={(event) => setInput(event.target.value)}
          />
          <input type="button" className="searchButton" onClick={() => searchForItem(input)} value="Search"/>
        </div>
    );
};


const mapDispatchToProps = {
  searchForItem
 };

export default connect(null, mapDispatchToProps)(SearchField)
