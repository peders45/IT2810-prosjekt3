import React from 'react';
import './ResultSection.css';
import Result from '../../atoms/Result/Result';
import { rateMenu }  from "../../../state/actions/ratingActions";
import { connect } from 'react-redux'

const ResultSection = ({menuItems}) => {
  return(
    <div className="resultSection">
      {menuItems.map((menuItem, i) =><Result menuItem={menuItem} key={"r"+i}/>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  menuItems: state.searchReducer.menus
});

export default connect(mapStateToProps)(ResultSection)

