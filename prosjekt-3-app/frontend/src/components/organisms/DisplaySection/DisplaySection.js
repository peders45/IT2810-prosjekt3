import React from 'react';
import './DisplaySection.css';
import SearchField from '../../atoms/SearchField/SearchField';
import ResultSection from '../../molecules/ResultSection/ResultSection';

const DisplaySection = () => {
  return(
    <div className="displaySection">
      <SearchField />
      <ResultSection />
    </div>
  )
}

export default DisplaySection;
