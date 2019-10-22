import React from 'react';
import './Result.css';
import '../../../App';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
//import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: '45%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(12),
    color: theme.palette.text.secondary,
  },
  expansionPanel: {
    backgroundColor: 'gold',
  },
}));


const Result = () => {
  const classes = useStyles();
  var menuItem = {
    Category: "Breakfast",
    Item: "Sausage McMuffin",
    Calories: 370,
    Total_Fat: 35,
    Sodium: 780,
    Sugars: 2,
    Protein: 14,
    Saturated_Fat: 8,
    Score: 3.8,
    Total_Fat_percentage_Daily_Value: 40,
    Cholesterol_percentage_Daily_Value: 67,
    Sodium_percentage_Daily_Value: 18,
    Calcium_percentage_Daily_Value: 3,
  };

  return (
    <div className={classes.root} id="wrapper">
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading}>{menuItem.Item}</Typography>
          <Typography className={classes.secondaryHeading}>
            Category: {menuItem.Category}  |  Rating: {menuItem.Score}★
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails}>
          <Typography className="info">
            <br />
            Calories: {menuItem.Calories}
            <br /><br />
            Total fat: {menuItem.Total_Fat}
            <br /><br />
            Saturated fat: {menuItem.Saturated_Fat}
            <br /><br />
            Sodium: {menuItem.Sodium}
            <br /><br />
            Sugars: {menuItem.Sugars}
            <br /><br />
            Protein: {menuItem.Protein}
          </Typography>
          <div>
          <h4>Percent of recommended daily values</h4>
          <RadarChart
           captions={{
             // columns
             Total_Fat_percentage_Daily_Value: 'Total fat %',
             Cholesterol_percentage_Daily_Value: 'Cholesterol %',
             Sodium_percentage_Daily_Value: 'Sodium %',
             Calcium_percentage_Daily_Value: 'Calcium %'
           }}
           data={[
             // data
             {
               data: {
                 Total_Fat_percentage_Daily_Value: JSON.parse(menuItem.Total_Fat_percentage_Daily_Value)/100,
                 Cholesterol_percentage_Daily_Value: JSON.parse(menuItem. Cholesterol_percentage_Daily_Value)/100,
                 Sodium_percentage_Daily_Value: JSON.parse(menuItem.Sodium_percentage_Daily_Value)/100,
                 Calcium_percentage_Daily_Value: JSON.parse(menuItem.Calcium_percentage_Daily_Value)/100,

             },
               meta: { color: "red" }
             },
           ]}
           size={200}
         />
         </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Result;
