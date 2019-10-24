//Actions for sorting results based on the different values
export function sortResult(sortString) {
  let sortObject = {
    sortCategory: "",
    sortValue: null
  }

  if (sortString === "Calories_HL") {
    sortObject = {
      sortCategory: "Calories",
      sortValue: false
    }
  }
  else if (sortString === "Calories_LH") {
    sortObject = {
      sortCategory: "Calories",
      sortValue: true
    }
  }
  else if (sortString === "score_HL") {
    sortObject = {
      sortCategory: "score",
      sortValue: false
    }
  }
  else {
    sortObject = {
      sortCategory: "score",
      sortValue: true
    }
  }

  return  {
    type: "SORT",
    payload: sortObject
  };
};
