import React from 'react';
import './StarRating.css';
import '../../../App'
import { rateMenu }  from "../../../state/actions/ratingActions";
import { connect } from 'react-redux'
import { withStyles } from '@material-ui/core/styles';
import Rating from '@material-ui/lab/Rating';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const StyledRating = withStyles({
  iconFilled: {
    color: '#ff6d75',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

const StarRating = ({rateMenu, rateValue}) => {
    return(
      <div>
        <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Score: {rateValue}</Typography>
          <StyledRating
            name="customized-color"
            icon={<FavoriteIcon fontSize="inherit" />}
            max={5}
            precision={1}
            value={rateValue}
            onChange={(event, value) => {rateMenu(value)}}
            size="small"
            //disabled={true}
            //readOnly={true}
            />
          </Box>
      </div>
    );
  };
  
const mapDispatchToProps = {
  rateMenu
};

const mapStateToProps = (state) => ({
  rateValue: state.ratingReducer.rateValue
});

export default connect(mapStateToProps, mapDispatchToProps)(StarRating)