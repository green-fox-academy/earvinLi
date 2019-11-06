// External Dependencies
import React from 'react';
import { connect } from 'react-redux';

// Material-UI Dependencies
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import { getSidebarStyles } from '../App/Styles';
import { openPostAddEditDialog } from '../UserInteraction/action';

// Local Variables
const useStyles = makeStyles(theme => getSidebarStyles(theme));

// Component Definition
const Sidebar = (props) => {
  const {
    buttonStyle,
    rootStyle,
  } = useStyles();

  const {
    onOpenPostAddEditDialog
  } = props;

  return (
    <Paper className={rootStyle}>
      <Button
        className={buttonStyle}
        color="primary"
        onClick={() => onOpenPostAddEditDialog()}
        variant="contained"
      >
        SUBMIT A NEW POST
      </Button>
    </Paper>
  );
};

export default connect(null, {
  onOpenPostAddEditDialog: openPostAddEditDialog,
})(Sidebar);
