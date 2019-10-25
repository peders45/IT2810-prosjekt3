import * as actions from './sortingActions'

it('should choose correct sortObject based on input', () => {
    const sortString = "score_HL"
    const expectedAction = {
      type: "SORT",
      payload: {
        sortCategory: "score",
        sortValue: false
      }
    }
    expect(actions.sortResult(sortString)).toEqual(expectedAction)
})