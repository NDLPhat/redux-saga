import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { withStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import styles from './styles';

class TaskFrom extends Component {
  render() {
    const { open, classes, onClose } = this.props;
    return (
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby='alert-dialog-title'
        aria-describedby='alert-dialog-description'
      >
        <DialogTitle id='alert-dialog-title'>Use Google's location service?</DialogTitle>
        <DialogContent>
          <TextField
            id='standard-name'
            label='Name'
            className={classes.textField}
            // value={values.name}
            // onChange={handleChange('name')}
            margin='normal'
          />

          <TextField
            id='standard-multiline-flexible'
            label='Multiline'
            multiline
            rowsMax='4'
            // value={values.multiline}
            // onChange={handleChange('multiline')}
            className={classes.textField}
            margin='normal'
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose} color='primary'>
            Cancel
          </Button>
          <Button onClick={onClose} color='primary' autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}

export default withStyles(styles)(TaskFrom);
