export function setSliderCalories(value) {
    return  {
      type: "SLIDER_CALORIES",
      payload: value
    };
};

export function setSliderRating(value) {
  return  {
    type: "SLIDER_RATING",
    payload: value
  };
};
