import React from 'react';
import './StarRating.css';
import '../../../App'
import { rateMenu }  from "../../../state/actions/ratingActions";
import ratingReducer  from "../../../state/reducers/ratingReducer";
import { connect } from 'react-redux'
import StarRatingComponent from 'react-star-rating-component';

const StarRating = ({rateMenu}) => {    
    return(
      <h2>
        <StarRatingComponent 
          name="starsMenu"
          emptyStarColor="#aaa2a2"
          starCount={5}
          value={ratingReducer.rateValue}
          onStarClick={(value) => rateMenu(value)}
        />
      </h2>
    );
};

const mapDispatchToProps = {
  rateMenu
};

const mapStateToProps = (state) => ({
  ratingReducer
});

export default connect(mapStateToProps, mapDispatchToProps)(StarRating)