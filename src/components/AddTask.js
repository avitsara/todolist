import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
class AddTask extends React.Component {
  render() {
    return <AddIcon variant="contained" color="primary">  Add Task </AddIcon>;
  }
}

/*== exporting by default a Component ===*/
export default AddTask;
