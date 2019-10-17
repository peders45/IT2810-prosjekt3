export function checkCategory(category) {
    return  {
      type: "CATEGORY_CHECK",
      payload: category
    };
};

export function uncheckCategory(category) {
    return  {
      type: "CATEGORY_UNCHECK",
      payload: category
    };
};
