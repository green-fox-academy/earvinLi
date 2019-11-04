// External Dependencies
import React from 'react';

// Material-UI Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Internal Dependencies
import AppHeader from '../AppHeader';
import PostList from '../PostList';
import Sidebar from '../Sidebar';
import { getAppStyles } from './Styles';

// Local Variables
const useStyles = makeStyles(theme => getAppStyles(theme));

const App = () => {
  const {
    rootStyle,
  } = useStyles();

  return (
    <>
      <AppHeader />
      <div className={rootStyle}>
        <PostList />
        <Sidebar />
      </div>
    </>
  );
};

export default App;
