import * as actions from './sliderActions'

describe('slideractions', () => {
  it('should create an action to set a slider calories value', () => {
    const payload = 1150
    const expectedAction = {
      type: "SLIDER_CALORIES",
      payload: 1150
    }
    expect(actions.setSliderCalories(payload)).toEqual(expectedAction)
  })

  it('should create an action to set a slider rating value', () => {
    const payload = 4
    const expectedAction = {
      type: "SLIDER_RATING",
      payload: 4
    }
    expect(actions.setSliderRating(payload)).toEqual(expectedAction)
  })  
})