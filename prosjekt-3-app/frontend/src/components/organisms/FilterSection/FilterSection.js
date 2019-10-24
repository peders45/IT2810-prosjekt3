import React from 'react';
import './FilterSection.css';
import SliderSection from '../../molecules/SliderSection/SliderSection';
import CategorySection from '../../molecules/CategorySection/CategorySection'
import {filterMenu} from '../../../state/actions/filterActions';
import { connect } from 'react-redux'

const FilterSection = () => {
  return(
    <div className="filterSection">
      <CategorySection />
      <SliderSection />
      <div className="filterButton" onClick={() => filterMenu()}>Filter</div>
    </div>
  )
}

const mapDispatchToProps = {
  filterMenu
};

export default connect(null, mapDispatchToProps)(FilterSection)
