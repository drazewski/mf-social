import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import AvatarInitials from '../../../helpers/AvatarInitials';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    avatar: {
      color: 'white',
      backgroundColor: '#1DC433',
    }
  }),
);

export interface PeopleAvatarProps {
    name: string;
    src: string;
}

export default function PeopleAvatar(props: PeopleAvatarProps): JSX.Element {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar src={props.src} className={classes.avatar}>{AvatarInitials(props.name)}</Avatar>
    </div>
  );
}