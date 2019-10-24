import React from 'react';
import './SortingDropDown.css';
import '../../../App'
import { sortResult }  from "../../../state/actions/sortingActions";
import { connect } from 'react-redux'
import { Select } from 'nav-frontend-skjema';

const SortingDropDown = ({ sortResult }) => {
    return(
      <div>
          <Select className="dropDownContainer" label="" onChange={(event) => sortResult(event.target.value)} bredde="s">
            <option value=''>Sort by:</option>
            <option value='calories_HL'>Calories (high-low)</option>
            <option value='calories_LH'>Calories (low-high)</option>
            <option value='rating_HL'>Ratings (high-low)</option>
            <option value='rating_LH'>Ratings (low-high)</option>
          </Select>
      </div>
    );
};


const mapDispatchToProps = {
  sortResult
 };

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingDropDown)
