// External Dependencies
import React from 'react';

// Material-UI Dependencies
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

// Component Definition
const TooltippedIconButton = (props) => {
  const {
    arialLabel,
    children,
    edge,
    title,
  } = props;

  return (
    <Tooltip title={title}>
      <IconButton arial-label={arialLabel} edge={edge}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default TooltippedIconButton;
