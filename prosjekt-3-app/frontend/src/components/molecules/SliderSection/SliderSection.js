import React from 'react';
import './SliderSection.css';
import RangeSlider from '../../atoms/Slider/Slider'

//Section component for sliders. Values for different direction of slider passed as "track"

const SliderSection = () => {
  return(
    <div className="sliderSection">
      <RangeSlider sliderValue={"Total calories"} track={"normal"} defaultValue={1880} min={0} max={1880} id="CalSlider"/>
      <RangeSlider sliderValue={"Ratings"} track={"inverted"} defaultValue={0} min={0} max={5} id="RateSlider" />
    </div>
  )
}

export default SliderSection;
