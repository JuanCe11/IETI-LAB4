import React from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Autocomplete from '@material-ui/lab/Autocomplete';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
    position: "fixed",
    bottom: 15,
    right: 15,
  },
  input: {
    display: 'none',
  },
}));

const options = [
  { title: 'Completed', },
  { title: 'Ready' },
  { title: 'In Progress' }
]

export default function FormDialog(props) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [status, setStatus] = React.useState('');
  const [description, setDescription] = React.useState('');
  const [dueDate, setDueDate] = React.useState(new Date());
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (!description.length || !status.length || !name.length || !email.length || !dueDate) {
      return;
    }
    var newItem = {
      description: description,
      status: status,
      dueDate: dueDate,
      responsible: {
        name: name,
        email: email
      }
    }
    props.save(newItem);
    setStatus("");
    setDescription("");
    setDueDate(new Date());
    setName("");
    setEmail("");
    setOpen(false)
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  }

  const handleStatusChange = (event, newValue) => {
    setStatus(newValue.title);
  }

  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  }
  const handleNameChange = (e) => {
    setName(e.target.value);
  }
  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  return (
    <div className={classes.root}>
      <Fab size="small" color="secondary" aria-label="add" onClick={handleClickOpen}>
        <AddIcon />
      </Fab>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add new todo</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="description"
            label="Description"
            onChange={handleDescriptionChange}
            fullWidth
          />
          <Autocomplete
            id="status"
            options={options}
            onChange={handleStatusChange}
            getOptionLabel={(option) => option.title}
            getOptionSelected={(option) => option.title}
            renderInput={(params) => (
              <TextField {...params} label="Status" margin="normal" />
            )}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Responsible name"
            onChange={handleNameChange}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Responsible email"
            type="email"
            onChange={handleEmail}
            fullWidth
          />
          <TextField
            autoFocus
            margin="dense"
            id="dueDate"
            type="date"
            onChange={handleDueDateChange}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

