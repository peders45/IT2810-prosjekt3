import React from 'react';
import './ResultSection.css';
import Result from '../../atoms/Result/Result';
import { rateMenu }  from "../../../state/actions/ratingActions";
import { connect } from 'react-redux'

// const menuItems = [{
//     Category: "Breakfast",
//     Item: "Sausage McMuffin",
//     Calories: 370,
//     Total_Fat: 35,
//     Sodium: 780,
//     Sugars: 2,
//     Protein: 14,
//     Saturated_Fat: 8,
//     Score: 3.8,
//     Total_Fat_percentage_Daily_Value: 40,
//     Cholesterol_percentage_Daily_Value: 67,
//     Sodium_percentage_Daily_Value: 18,
//     Calcium_percentage_Daily_Value: 3,
// },
// {
//   Category: "Breakfast",
//   Item: "Sausage McMuffin",
//   Calories: 370,
//   Total_Fat: 35,
//   Sodium: 780,
//   Sugars: 2,
//   Protein: 14,
//   Saturated_Fat: 8,
//   Score: 3.8,
//   Total_Fat_percentage_Daily_Value: 40,
//   Cholesterol_percentage_Daily_Value: 67,
//   Sodium_percentage_Daily_Value: 18,
//   Calcium_percentage_Daily_Value: 3,
// }];

const ResultSection = ({menuItems}) => {
  console.log(menuItems)
  return(
    <div className="resultSection">
      {menuItems.map((menuItem, i) =><Result menuItem={menuItem} key={"r"+i}/>)}
    </div>
  )
}

const mapDispatchToProps = {
  rateMenu
};

const mapStateToProps = (state) => ({
  menuItems: state.searchReducer.menus
});

export default connect(mapStateToProps, mapDispatchToProps)(ResultSection)

