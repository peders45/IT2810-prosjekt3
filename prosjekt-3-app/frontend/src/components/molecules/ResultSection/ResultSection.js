import React, { useEffect } from 'react';
import Result from '../../atoms/Result/Result';
import './ResultSection.css';
import { connect } from 'react-redux'
import { searchForItem }  from "../../../state/actions/searchActions";
import { doPagination }  from "../../../state/actions/paginationAction";

//Component for accessing every searchresult item
const ResultSection = ({menuItems, searchForItem, offset, doPagination, count}) => {
  useEffect(() => {searchForItem(null)}, []);

  //Finding the next/previous batch of searchresults
  const checkPagination = (isNext) =>{
    if(isNext && offset + 9 < count){
      doPagination(isNext)
    }else if(!isNext && offset - 9 >= 0){
      doPagination(isNext)
    }
  }
  //Mapping the searchresult items, as well as including next and previous buttons
  return(
    <div className="resultSection">
      {menuItems.map((menuItem, i) =><Result menuItem={menuItem} key={"r"+i}/>)}
      <div id="pagianationSection">
        <div id="pagiantionButtons">
          <div className="nextAndPrevButton" onClick={()=>checkPagination(false)}>Previous</div>
          <div className="nextAndPrevButton" onClick={()=>checkPagination(true)}>Next</div>
        </div>
      <div>{offset}-{offset+menuItems.length} of {count}</div>
      </div>
    </div>
  )
}

//Dispatching actions to the store
const mapDispatchToProps = {
  searchForItem,
  doPagination
 };
 
//Extract data from the store
const mapStateToProps = (state) => ({
  menuItems: state.menus,
  offset: state.offset,
  count: state.count,
});

//Connect the store to this component
export default connect(mapStateToProps, mapDispatchToProps)(ResultSection)
