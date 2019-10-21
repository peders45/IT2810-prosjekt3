import React from 'react';
import './SliderSection.css';
import RangeSlider from '../../atoms/Slider/Slider'

const SliderSection = () => {
  return(
    <div className="sliderSection">
      <RangeSlider sliderValue={"Total calories"} track={"normal"} defaultValue={3000} min={0} max={3000}/>
      <RangeSlider sliderValue={"Ratings"} track={"inverted"} defaultValue={0} min={0} max={5}/>
    </div>
  )
}

export default SliderSection;
