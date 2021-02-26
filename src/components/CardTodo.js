import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import CachedIcon from '@material-ui/icons/Cached';
import IconButton from '@material-ui/core/IconButton';
import DoneIcon from '@material-ui/icons/Done';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';


const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    "margin-bottom": 6
  },
  media: {
    height: 140,
  },
});

export default function MediaCard(props) {
  const classes = useStyles();


  return (
    <Card className={classes.root}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            {props.todo.status === 'Completed' ? <AssignmentTurnedInIcon /> : props.todo.status === 'Ready' ? <DoneIcon /> : <CachedIcon />}
          </IconButton>
        }
        title={props.todo.description}
      />
      <CardActionArea>
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.todo.status}-{props.todo.dueDate.toDateString()}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.todo.responsible.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
