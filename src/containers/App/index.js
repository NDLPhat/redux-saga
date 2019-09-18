import React from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import styles from './styles';
import Dashboard from '../Dashboard';
import theme from '../../common/theme';

class App extends React.Component {
  render() {
    console.log(this.props);
    // const { classes } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Dashboard />
      </ThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
