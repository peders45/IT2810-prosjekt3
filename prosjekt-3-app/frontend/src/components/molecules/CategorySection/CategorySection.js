import React from 'react';
import './CategorySection.css';
import CategoryCheckbox from '../../atoms/CategoryCheckbox/CategoryCheckbox'

const CategorySection = () => {
  return(
    <div className="categorySection">
      <CategoryCheckbox category="Breakfast" />
      <CategoryCheckbox category="Beef & pork" />
      <CategoryCheckbox category="Chicken & fish" />
      <CategoryCheckbox category="Snacks & sides" />
      <CategoryCheckbox category="Salads" />
      <CategoryCheckbox category="Beverages" />
      <CategoryCheckbox category="Desserts" />
      <CategoryCheckbox category="Coffee & tea" />
      <CategoryCheckbox category="Smoothies & shakes" />
    </div>
  )
}

export default CategorySection;
