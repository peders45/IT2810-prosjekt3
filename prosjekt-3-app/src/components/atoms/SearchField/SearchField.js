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
          <label>Search for item: </label>
          <input
          name="search"
          type="text"
          placeholder="Search..."
          onChange={(event) => setInput(event.target.value)}
          />
          <input type="button" onClick={() => searchForItem(input)} value="submit"/>
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
