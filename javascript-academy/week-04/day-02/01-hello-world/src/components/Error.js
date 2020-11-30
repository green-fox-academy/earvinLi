// External Dependencies
import React from 'react';
import { useParams } from 'react-router-dom';

function Error() {
  const { errorcode: errorCode } = useParams();
  console.log(errorCode);

  return (
    errorCode
    ? <p>{`Error: ${errorCode}`}</p>
    : <p>Something bad happened!</p>
  );
}

export default Error;
