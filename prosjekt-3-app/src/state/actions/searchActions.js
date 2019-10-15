export function searchForItem(searchWord) {
  return  {
    type: "SEARCH",
    payload: searchWord
  };
};
