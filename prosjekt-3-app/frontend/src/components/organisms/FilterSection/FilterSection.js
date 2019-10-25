import React from 'react';
import './FilterSection.css';
import SliderSection from '../../molecules/SliderSection/SliderSection';
import CategorySection from '../../molecules/CategorySection/CategorySection'

//React component to gather all filtering components, as well as the logo
//McDonalds logo downloaded from https://worldvectorlogo.com/logo/mcdonald-s-15
const FilterSection = () => {
  return(
    <div className="filterSection">
      <img src="burgerLogo.png" alt="Burger" />
      <CategorySection />
      <SliderSection />
    </div>
  )
}

export default FilterSection
