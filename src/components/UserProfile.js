import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import ListItem from '@material-ui/core/ListItemIcon';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import { changeUser } from '../utils';

export default function UserProfile(props) {
    const [open, setOpen] = React.useState(false);
    const [name, setName] = React.useState('');
    const [username, setUsername] = React.useState(localStorage.getItem("user"));
    const [password, setPassword] = React.useState('');
    const [password2, setPassword2] = React.useState('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleSave = () => {
        if (!password.length || !password2.length || !name.length) {
            return;
        }
        if (password !== password2) {
            alert("Las contraseñas no coinciden");
            return;
        }

        var newUser = {
            name: name,
            password: password,
        }
        setUsername(newUser.name);
        changeUser(newUser);
        setPassword("");
        setName("");
        setOpen(false)
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handlePassword2Change = (e) => {
        setPassword2(e.target.value);
    }

    const handleNameChange = (e) => {
        setName(e.target.value);
    }

    return (
        <div>
            <ListItem className="MuiListItemIcon-root" key={'User'} onClick={handleClickOpen}>
                <ListItemIcon>
                    <AccountBoxIcon />
                </ListItemIcon>
                <ListItemText primary={username} />
            </ListItem>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Change user Data</DialogTitle>
                <DialogContent>
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
                        id="password"
                        label="password"
                        type="password"
                        onChange={handlePasswordChange}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="password2"
                        label="confirm password"
                        type="password"
                        onChange={handlePassword2Change}
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

