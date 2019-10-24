import React from 'react';
import './CategoryCheckbox.css';
import '../../../App'
import { checkCategory, uncheckCategory }  from "../../../state/actions/categoryActions";
import { connect } from 'react-redux'

const CategoryCheckbox = ({ category, checkCategory, uncheckCategory }) => {

  const handleChange = (event) => {
    if(event.target.checked) {
      checkCategory(category);
    } else {
      uncheckCategory(category);
    }
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
  
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryCheckbox)
