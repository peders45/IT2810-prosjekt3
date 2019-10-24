import React, { useEffect } from 'react';
import Result from '../../atoms/Result/Result';
import { connect } from 'react-redux'
import { searchForItem }  from "../../../state/actions/searchActions";
import { doPagination }  from "../../../state/actions/paginationAction";

//Component for accessing search results
const ResultSection = ({menuItems, searchForItem, offset, doPagination, count}) => {
  useEffect(() => {searchForItem(null)}, []);

  const checkPagination = (isNext) =>{
    if(isNext && offset + 9 < count){
      doPagination(isNext)
    }else if(!isNext && offset - 9 >= 0){
      doPagination(isNext)
    }
  }

  return(
    <div className="resultSection">
      {menuItems.map((menuItem, i) =><Result menuItem={menuItem} key={"r"+i}/>)}
      <div className="nextAndPrevButton" onClick={()=>checkPagination(false)}>Previous</div>
      <div className="nextAndPrevButton" onClick={()=>checkPagination(true)}>Next</div>
      <div>{offset}-{offset+menuItems.length} of {count}</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  menuItems: state.menus,
  offset: state.offset,
  count: state.count,
});

const mapDispatchToProps = {
  searchForItem,
  doPagination
 };

export default connect(mapStateToProps, mapDispatchToProps)(ResultSection)
