import React, { Component } from 'react';
import { withStyles } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import styles from './styles';
import { STATUS } from '../../constants';

class TaskItem extends Component {
  render() {
    const { status, classes, task } = this.props;
    return (
      <Card key={task.id} className={classes.card}>
        <CardContent>
          <Grid container justify='space-between'>
            <Grid item md={8}>
              <Typography component='h2'>{task.title}</Typography>
            </Grid>
            <Grid item md={4}>
              <Typography component='h2'>
                {STATUS[status.value].label}
              </Typography>
            </Grid>
          </Grid>
          <p>{task.description}</p>
        </CardContent>
        <CardActions className={classes.cardActions}>
          <Fab
            color='primary'
            aria-label='add'
            className={classes.fab}
            size='small'
          >
            <AddIcon />
          </Fab>
          <Fab aria-label='delete' className={classes.fab} size='small'>
            <DeleteIcon />
          </Fab>
        </CardActions>
      </Card>
    );
  }
}

export default withStyles(styles)(TaskItem);
