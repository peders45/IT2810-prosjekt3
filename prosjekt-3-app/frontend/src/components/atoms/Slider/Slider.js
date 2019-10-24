import React from 'react';
import './Slider.css';
import '../../../App'
import { setSliderCalories, setSliderRating }  from "../../../state/actions/sliderActions";
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import { connect } from 'react-redux'

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}`;
}

const RangeSlider = ( {sliderValue, setSliderCalories, setSliderRating, track, defaultValue, max, min} ) => {
  const classes = useStyles();

  const handleChange = (event, value) => {
    if (sliderValue === "Total calories") {
      setSliderCalories(value);
    }
    else {
      setSliderRating(value);
    }
  };

  return (
    <div className={classes.root}>
      <label>{sliderValue}</label>
      <Typography id="continuous-slider" gutterBottom label="Slider">
      </Typography>
      <Slider
        min={min}
        max={max}
        track={track}
        defaultValue={defaultValue}
        onChangeCommitted={(event, value) => handleChange(event, value)}
        valueLabelDisplay="auto"
        aria-labelledby="continuous-slider"
        getAriaValueText={valuetext}
        color="primary"
      />
    </div>
  );
}


const mapDispatchToProps = {
  setSliderCalories,
  setSliderRating
 };

const mapStateToProps = (state) => ({
  
});

export default connect(mapStateToProps, mapDispatchToProps)(RangeSlider)
