import React from 'react';
import './CategorySection.css';
import CategoryCheckbox from '../../atoms/CategoryCheckbox/CategoryCheckbox'

//Section for category checkboxes
const CategorySection = () => {
  return(
    <div className="categorySection">
      <CategoryCheckbox categoryShown="Breakfast" categoryQuery="Breakfast" />
      <CategoryCheckbox categoryShown="Beef & pork" categoryQuery="Beef_&_Pork" />
      <CategoryCheckbox categoryShown="Chicken & fish" categoryQuery="Chicken_&_Fish" />
      <CategoryCheckbox categoryShown="Snacks & sides" categoryQuery="Snacks_&_Sides" />
      <CategoryCheckbox categoryShown="Salads" categoryQuery="Salads" />
      <CategoryCheckbox categoryShown="Beverages" categoryQuery="Beverages" />
      <CategoryCheckbox categoryShown="Desserts" categoryQuery="Desserts" />
      <CategoryCheckbox categoryShown="Coffee & tea" categoryQuery="Coffee_&_Tea" />
      <CategoryCheckbox categoryShown="Smoothies & shakes" categoryQuery="Smoothies_&_Shakes" />
    </div>
  )
}

export default CategorySection;
