import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import styles from './styles';
import { STATUS } from '../../constants';
import TaskList from '../../components/TaskList';
import TaskForm from '../../components/TaskForm';

const listTask = [
  {
    id: 1,
    title: 'Read Book',
    description: 'Read material ui book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play Football',
    description: 'with my friends',
    status: 2,
  },
  {
    id: 3,
    title: 'Play game',
    description: 'dasdsa',
    status: 1,
  },
];

class Dashboard extends Component {
  state = {
    open: false,
  };

  renderBoard = () => {
    return (
      <Grid container spacing={2}>
        {STATUS.map(status => {
          const taskFilter = listTask.filter(
            task => task.status === status.value,
          );
          return <TaskList taskFilter={taskFilter} status={status} />;
        })}
      </Grid>
    );
  };

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  renderForm = () => {
    const { open } = this.state;
    return <TaskForm open={open} onClose={this.handleClose} />;
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  render() {
    const { classes } = this.props;
    console.log(classes);
    return (
      <div className={classes.dashBoard}>
        <Button
          variant='contained'
          color='primary'
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.renderBoard()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(Dashboard);
