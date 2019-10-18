// External Dependencies
import React from 'react';

// Material-UI Dependencies
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

// Component Definition
function App() {
  return (
    <Grid container spacing={3}>
      <Grid item xs={2}>
        <Paper>MarkdownList</Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper>Editor</Paper>
      </Grid>
      <Grid item xs={5}>
        <Paper>Previewer</Paper>
      </Grid>
    </Grid>
  );
}

export default App;
