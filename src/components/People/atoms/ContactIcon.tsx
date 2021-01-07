import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import PersonIcon from '@material-ui/icons/Person';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import SearchIcon from '@material-ui/icons/Search';
import PersonAddIcon from '@material-ui/icons/PersonAdd';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    avatar: {
      color: '#707070',
      backgroundColor: '#EAEAEA',
      height: 36,
      width: 36,
    },
    suggestWrapper: {
        position: 'relative'
    },
    suggestPeopleIcon: {
        position: 'absolute',
        right: '-8px',
        top: '-8px',
    },
    suggestSearchIcon: {
        position: 'absolute',
        top: '-18px',
        right: '-18px',
        transform: 'scale(0.6)'
    }
  }),
);

export interface ContactIconProps {
  type: 'connections' | 'invites' | 'suggested';
}

export default function ContactIcon(props: ContactIconProps) {
  const classes = useStyles();

  const renderIcon = (props: ContactIconProps): JSX.Element => {
    switch (props.type) {
      case 'connections':
        return <PersonIcon />;
      case 'invites':
        return <PersonAddIcon />;
      case 'suggested':
        return (
            <div className={classes.suggestWrapper}>
                <PeopleAltIcon className={classes.suggestPeopleIcon} fontSize="small"/>
                <SearchIcon className={classes.suggestSearchIcon} fontSize="small" />
            </div>
        );
      default:
        return <PersonIcon />;
    }
  };

  return (
    <Avatar className={classes.avatar}>{renderIcon(props)}</Avatar>
  );
}