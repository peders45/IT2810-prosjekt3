import React from 'react';
import './CategoryCheckbox.css';
import '../../../App'
import { checkCategory, uncheckCategory }  from "../../../state/actions/categoryActions";
import { connect } from 'react-redux'
import { searchForItem }  from "../../../state/actions/searchActions";

//Checkboxes to select categories of menu items, uses two actions for checking and unchecking
const CategoryCheckbox = ({ categoryShown, categoryQuery, checkCategory, uncheckCategory, searchForItem, searchWord }) => {

  const handleChange = (event) => {
    if(event.target.checked) {
      checkCategory(categoryQuery);
    } else {
      uncheckCategory(categoryQuery);
    }
    searchForItem(searchWord)
  };

    return(
      <div>
        <label className="checkboxContainer">{categoryShown}
            <input className="checkbox"
                type="checkbox"
                onChange={(event) => handleChange(event)}
                />
                <span className="checkmark"></span>
          </label>
      </div>
    );
};


const mapDispatchToProps = {
  checkCategory,
  uncheckCategory,
  searchForItem
 };

const mapStateToProps = (state) => ({
  searchWord: state.searchWord
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCheckbox)
