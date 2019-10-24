//Action for setting calorie slider value
export function setSliderCalories(value) {
    return  {
      type: "SLIDER_CALORIES",
      payload: value
    };
};

//Action for setting rating slider value
export function setSliderRating(value) {
  return  {
    type: "SLIDER_RATING",
    payload: value
  };
};
