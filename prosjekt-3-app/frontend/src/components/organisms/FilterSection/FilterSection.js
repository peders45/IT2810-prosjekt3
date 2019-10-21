import React from 'react';
import './FilterSection.css';
import SliderSection from '../../molecules/SliderSection/SliderSection';
import CategorySection from '../../molecules/CategorySection/CategorySection'

const FilterSection = () => {
  return(
    <div className="filterSection">
      <CategorySection />
      <SliderSection />
    </div>
  )
}

export default FilterSection;
