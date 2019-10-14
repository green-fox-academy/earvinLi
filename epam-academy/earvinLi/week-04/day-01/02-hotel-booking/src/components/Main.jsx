// External Dependencies
import React, { Fragment }  from 'react';

// Internal Dependencies
import HotelList from './HotelList';
import PropertyType from './PropertyType';
import StarRating from './StarRating';

// Local Variables
const styles = {
  filterContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '70px 15px 0 0',
    width: 200,
  },
  hotelContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: 700,
  },
  mainContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function Main() {
  const {
    filterContainer,
    hotelContainer,
    mainContainer,
  } = styles;

  return (
    <Fragment>
      <h1>Hotel Booking</h1>
      <div style={mainContainer}>
        <div style={filterContainer}>
          <StarRating />
          <PropertyType />
        </div>
        <div style={hotelContainer}>
          <HotelList />
        </div>
      </div>
    </Fragment>
  );
}

export default Main;
