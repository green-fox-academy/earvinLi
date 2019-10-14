// External Dependencies
import React from 'react';

// Internal Dependencies
import { PropertyTypeData } from '../utils';

// Local Variables
const styles = {
  starRatingContainer: {
    border: '1px solid black',
    padding: 10,
  },
};

function PropertyType() {
  const starRatingItems = PropertyTypeData.map((propertyTypeItem) => (
    <div>
      <input
        checked={propertyTypeItem.checked}
        key={propertyTypeItem.name}
        type='checkbox'
      />
      <label>{propertyTypeItem.name}</label>
    </div>
  ));

  return (
    <div style={styles.starRatingContainer}>
      <h4>Property Type</h4>
      {starRatingItems}
    </div>
  );
}

export default PropertyType;
