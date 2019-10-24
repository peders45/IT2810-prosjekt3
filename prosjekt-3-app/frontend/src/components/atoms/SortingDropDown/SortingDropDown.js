import React from 'react';
import './SortingDropDown.css';
import '../../../App'
import { sortResult }  from "../../../state/actions/sortingActions";
import { connect } from 'react-redux'
import { Select } from 'nav-frontend-skjema';
import { searchForItem }  from "../../../state/actions/searchActions";

//Drop down menu for selection of value to sort results on
const SortingDropDown = ({ sortResult, searchForItem, searchWord }) => {
  const handleChange = (event, value) => {
    sortResult(event.target.value)
    searchForItem(searchWord)
  };

    return(
      <div>
          <Select className="dropDownContainer" label="" onChange={(event, value) => handleChange(event, value)} bredde="s">
            <option value=''>Sort by:</option>
            <option value="Calories_HL">Calories (high-low)</option>
            <option value="Calories_LH">Calories (low-high)</option>
            <option value="score_HL">Ratings (high-low)</option>
            <option value="score_LH">Ratings (low-high)</option>
          </Select>
      </div>
    );
};

//Dispatching actions to the store
const mapDispatchToProps = {
  sortResult,
  searchForItem
 };

//Extract data from the store
const mapStateToProps = (state) => ({
  searchWord: state.searchWord
});

//Connect the store to this component
export default connect(mapStateToProps, mapDispatchToProps)(SortingDropDown)
