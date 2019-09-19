import React from 'react';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';
import styles from './styles';
import Dashboard from '../Dashboard';
import theme from '../../common/theme';
import configureStore from '../../redux/configureStore';

const store = configureStore();
class App extends React.Component {
  render() {
    console.log(this.props);
    // const { classes } = this.props;
    return (
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <Dashboard />
        </ThemeProvider>
      </Provider>
    );
  }
}

export default withStyles(styles)(App);
