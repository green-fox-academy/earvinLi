// External Dependencies
import React from 'react';

// Material-UI Dependencies
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import ToolBar from '@material-ui/core/ToolBar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import { getAppHeaderStyles } from '../App/Styles';

// Local Variable
const useStyles = makeStyles(theme => getAppHeaderStyles(theme));

// Component Dependencies
const AppHeader = () => {
  const {
    buttonStyle,
    rootStyle,
    sloganImageStyle,
    titleStyle,
    toolBarStyle,
  } = useStyles();

  return (
    <div className={rootStyle}>
      <AppBar position="static">
        <ToolBar className={toolBarStyle}>
          <Typography className={titleStyle} variant="h6">
            Reddit Mockup
          </Typography>
          <Button className={buttonStyle}>Sign In</Button>
          <Button className={buttonStyle}>Sign Up</Button>
        </ToolBar>
      </AppBar>
      <img
        alt='Sublime purple night sky.'
        className={sloganImageStyle}
        src="https://images.unsplash.com/photo-1504858700536-882c978a3464?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1600&h=192&fit=crop&ixid=eyJhcHBfaWQiOjF9"
      />
    </div>
  );
};

export default AppHeader;
