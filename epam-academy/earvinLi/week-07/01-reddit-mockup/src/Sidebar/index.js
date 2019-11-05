// External Dependencies
import React, { useState } from 'react';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import PostAddDialog from './PostAddDialog';
import { getSidebarStyles } from '../App/Styles';

// Local Variables
const useStyles = makeStyles(theme => getSidebarStyles(theme));

// Component Definition
const Sidebar = () => {
  const {
    buttonStyle,
    rootStyle,
  } = useStyles();

  const [ isOpen, setIsOpen ] = useState(false);

  return (
    <>
      <Paper className={rootStyle}>
        <Button
          className={buttonStyle}
          color="primary"
          onClick={() => setIsOpen(true)}
          variant="contained"
        >
        SUBMIT A NEW POST
      </Button>
      </Paper>
      <PostAddDialog
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Sidebar;
