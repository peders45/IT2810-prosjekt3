import React, { useState } from 'react';
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

//Star rating of search/filter results, added to and updated in database.

const StarRating = ({rateMenu, menuID}) => {
    const [value, setValue] = useState(0);
    return(
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
      <Typography component="legend">Score: {value}</Typography>
        <StyledRating
          name={menuID}
          icon={<FavoriteIcon fontSize="inherit" />}
          max={5}
          precision={1}
          value={value}
          onChange={(event, value) => {
            console.log(menuID)
            setValue(value)
            rateMenu(value, menuID)
          }}
          size="small"
        />
      </Box>
    </div>
  );
};

const mapDispatchToProps = {
  rateMenu
};


export default connect(null, mapDispatchToProps)(StarRating)
