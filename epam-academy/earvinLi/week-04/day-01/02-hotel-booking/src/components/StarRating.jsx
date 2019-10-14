// External Dependencies
import React from 'react';

// Internal Dependencies
import { StarRatingData } from '../utils';

// Local Variables
const styles = {
  starRatingContainer: {
    border: '1px solid black',
    marginBottom: 15,
    padding: 10,
  },
};

function StarRating() {
  const starRatingItems = StarRatingData.map((starRatingItem) => (
    <div>
      <input
        checked={starRatingItem.checked}
        key={starRatingItem.name}
        type='checkbox'
      />
      <label>{starRatingItem.name}</label>
    </div>
  ));

  return (
    <div style={styles.starRatingContainer}>
      <h4>Star Rating</h4>
      {starRatingItems}
    </div>
  );
}

export default StarRating;
