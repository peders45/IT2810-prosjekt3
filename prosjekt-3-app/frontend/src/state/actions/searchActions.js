import client from '../../setupApolloClient';
import gql from 'graphql-tag';	

const GET_MENU = gql`
    query{
      menu(categories:["Salads"]){
        Category
        Calories
      }
    }
  `;

  client.query({
    query: GET_MENU,
  })
  .then(console.log);

export function searchForItem(searchWord) {
  return  {
    type: "SEARCH",
    payload: searchWord
  };
};
