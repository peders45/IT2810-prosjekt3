import React from 'react';
import Result from '../../atoms/Result/Result';
import { connect } from 'react-redux'

//Component for accessing search results

const ResultSection = ({menuItems}) => {
  return(
    <div className="resultSection">
      {menuItems.map((menuItem, i) =><Result menuItem={menuItem} key={"r"+i}/>)}
    </div>
  )
}

const mapStateToProps = (state) => ({
  menuItems: state.menus
});

export default connect(mapStateToProps, null)(ResultSection)
