// External Dependencies
import React from 'react';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import { getSidebarStyles } from '../App/Styles';

// Local Variables
const useStyles = makeStyles(theme => getSidebarStyles(theme));

// Component Definition
const Sidebar = () => {
  const {
    buttonStyle,
    rootStyle,
  } = useStyles();

  return (
    <Paper className={rootStyle}>
      <Button
        className={buttonStyle}
        color="primary"
        variant="contained"
      >
      SUBMIT A NEW POST
    </Button>
    </Paper>
  );
};

export default Sidebar;
