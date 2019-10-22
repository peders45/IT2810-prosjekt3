import React, { useState } from 'react';
import './SearchField.css';
import '../../../App'
import { searchForItem }  from "../../../state/actions/searchActions";
import searchReducer  from "../../../state/reducers/searchReducer";
import { connect } from 'react-redux'

const SearchField = ({ searchForItem }) => {

  const [ input, setInput ] = useState([]);

    return(
        <div>
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

const mapStateToProps = (state) => ({
  searchReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchField)
