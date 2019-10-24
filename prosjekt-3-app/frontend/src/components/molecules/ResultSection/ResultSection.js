import React, { useEffect } from 'react';
import './ResultSection.css';
import Result from '../../atoms/Result/Result';
import { connect } from 'react-redux'
import { searchForItem }  from "../../../state/actions/searchActions";
import { doPagination }  from "../../../state/actions/paginationAction";

const ResultSection = ({menuItems, searchForItem, offset, doPagination}) => {
  useEffect(() => {searchForItem(null)}, []);
  return(
    <div className="resultSection">
      {menuItems.map((menuItem, i) =><Result menuItem={menuItem} key={"r"+i}/>)}
      <div className="nextAndPrevButton" onClick={()=>doPagination(false)}>Previous</div>
      <div className="nextAndPrevButton" onClick={()=>doPagination(true)}>Next</div>
      <div>{offset}-{offset+menuItems.length} of 261</div>
    </div>
  )
}

const mapStateToProps = (state) => ({
  menuItems: state.searchReducer.menus,
  offset: state.searchReducer.offset
});

const mapDispatchToProps = {
  searchForItem,
  doPagination
 };

export default connect(mapStateToProps,mapDispatchToProps)(ResultSection)
