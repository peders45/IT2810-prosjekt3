import React, { useState } from 'react';
import './CategoryCheckbox.css';
import '../../../App'
import { checkCategory, uncheckCategory }  from "../../../state/actions/categoryActions";
import categoryReducer  from "../../../state/reducers/categoryReducer";
import { connect } from 'react-redux'

const CategoryCheckbox = ({ category, checkCategory, uncheckCategory }) => {

  const handleChange = (event) => {
    if(event.target.checked) {
      console.log("Checked!", category);
      checkCategory(category);
    } else {
      console.log("Unchecked!", category);
      uncheckCategory(category);
    }
    //setChecked(checked.includes(value) ? checked.filter(c => c !== value) : [...checked, value]);
  };

    return(
      <div>
        <label className="checkboxContainer">{category}
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
  uncheckCategory
 };

const mapStateToProps = (state) => ({
  categoryReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCheckbox)
