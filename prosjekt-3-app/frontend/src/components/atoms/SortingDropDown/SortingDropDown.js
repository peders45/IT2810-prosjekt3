import React from 'react';
import './SortingDropDown.css';
import '../../../App'
import { sortResult }  from "../../../state/actions/sortingActions";
import sortingReducer  from "../../../state/reducers/sortingReducer";
import { connect } from 'react-redux'
import { Select } from 'nav-frontend-skjema';

const SortingDropDown = ({ sortResult }) => {
    return(
      <div>
          <Select className="dropDownContainer" label="" onChange={(event) => sortResult(event.target.value)}>
            <option value=''>Sorter etter:</option>
            <option value='calories_HL'>Kalorier (høy-lav)</option>
            <option value='calories_LH'>Kalorier (lav-høy)</option>
            <option value='servingsize_HL'>Porsjonsstørrelse (høy-lav)</option>
            <option value='servingsize_LH'>Porsjonsstørrelse (lav-høy)</option>
            <option value='rating_HL'>Rating (høy-lav)</option>
            <option value='rating_LH'>Rating (lav-høy)</option>
          </Select>
      </div>
    );
};


const mapDispatchToProps = {
  sortResult
 };

const mapStateToProps = (state) => ({
  sortingReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(SortingDropDown)
