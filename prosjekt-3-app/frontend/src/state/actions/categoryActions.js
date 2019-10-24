//Action for checking a category box
export function checkCategory(category) {
    return  {
      type: "CATEGORY_CHECK",
      payload: category
    };
};

//Action for unchecking a category box
export function uncheckCategory(category) {
    return  {
      type: "CATEGORY_UNCHECK",
      payload: category
    };
};
