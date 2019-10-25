import React from 'react';
import './Result.css';
import '../../../App';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import StarRating from '../StarRating/StarRating';
import RadarChart from 'react-svg-radar-chart';
import 'react-svg-radar-chart/build/css/index.css';

//Constant for styling of imported component
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(13),
    fontWeight: theme.typography.fontWeightRegular,
    flexBasis: '45%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(11),
    color: theme.palette.text.secondary,
  },
  expansionPanel: {
    backgroundColor: 'gold',
  },
}));

//Display of search result as expandable panels, with radar chart and rating
const Result = ({menuItem}) => {
  const classes = useStyles();
  return (
    <div className={classes.root} id="wrapper">
      <ExpansionPanel className={classes.expansionPanel}>
        <ExpansionPanelSummary
          aria-controls="panel1a-content"
          id="panel1a-header">
          <Typography className={classes.heading} id="mainHeading">{menuItem.Item}</Typography>
          <Typography className={classes.secondaryHeading} id="secondaryHeading">
            Category: {menuItem.Category}  |  Rating: {Math.round(menuItem.score*10)/10}🖤
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.expansionPanelDetails} id="details">
          <Typography className="info">
            <br />
            Calories: {menuItem.Calories}
            <br /><br />
            Carbohydrates: {menuItem.Carbohydrates}
            <br /><br />
            Protein: {menuItem.Protein}
            <br /><br />
            Total fat: {menuItem.Total_Fat}
            <br /><br />
            Saturated fat: {menuItem.Saturated_Fat}
            <br /><br />
            Sugars: {menuItem.Sugars}
          </Typography>
          <div>
          <h4>Percent of recommended daily values (0-200)</h4>
          <RadarChart
           captions={{
             //Columns
             Total_Fat_percentage_Daily_Value: 'Total fat %',
             Cholesterol_percentage_Daily_Value: 'Cholesterol %',
             Sodium_percentage_Daily_Value: 'Sodium %',
             Calcium_percentage_Daily_Value: 'Calcium %'
           }}
           data={[
             //Data
             {
               data: {
                 Total_Fat_percentage_Daily_Value: menuItem.Total_Fat_percentage_Daily_Value/200,
                 Cholesterol_percentage_Daily_Value: menuItem.Cholesterol_percentage_Daily_Value/200,
                 Sodium_percentage_Daily_Value: menuItem.Sodium_percentage_Daily_Value/200,
                 Calcium_percentage_Daily_Value: menuItem.Calcium_percentage_Daily_Value/200,
             },
               meta: { color: "red" }
             },
           ]}
           scales= {2}
           size={200}
           dots= {true}
         />
         </div>
         <div className="stars">
           <StarRating key={menuItem._id} menuID={menuItem._id} />
         </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  )
}

export default Result;
