// External Dependencies
import React from 'react';

// Internal Dependencies
import { HotelData } from '../utils';

// Local Variables
const styles = {
  detailContainer: {
    display: 'flex',
  },
  hotelImage: {
    height: 150,
    width: 150,
  },
  hotelItemContainer: {
    border: '1px solid black',
    marginBottom: 10,
    padding: 10,
  },
};

function HotelList() {
  const {
    detailContainer,
    hotelImage,
    hotelItemContainer,
  } = styles;

  const hotelItems = HotelData.map((hotelItem) => (
    <div style={hotelItemContainer}>
      <h3>{hotelItem.name}</h3>
      <div style={detailContainer}>
        <img
          alt={hotelItem.name}
          src={hotelItem.imageURL}
          style={hotelImage}
        />
        <div>
          <p>{hotelItem.description}</p>
          <button type='button'>Book Now!</button>
        </div>
      </div>
    </div>
  ));

  return (
    <div>
      <h2>Hotel List</h2>
      {hotelItems}
    </div>
  );
}

export default HotelList;
