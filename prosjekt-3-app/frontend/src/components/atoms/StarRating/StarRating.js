import React from 'react';
import './StarRating.css';
import '../../../App'
import StarRatingComponent from 'react-star-rating-component';

const StarRating = ({rateMenu}) => {    
    return(
      <h2>
        <StarRatingComponent 
          name="rate1"
          emptyStarColor={"#b7aeae"}
          starCount={5}
          value={1}
        />
      </h2>
    );
};

export default StarRating