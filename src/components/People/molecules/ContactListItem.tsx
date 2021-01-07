import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Icon from '../atoms/ContactIcon';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding:0,
      marginTop:0,
      backgroundColor: theme.palette.paper.main
    },
    inline: {
      display: 'inline',
      color:'#888888',
      textTransform: 'lowercase',
      fontSize: '12px',
    },
    primaryText:{
      textTransform: 'capitalize',
      '& span': {
        fontSize: '14px',
      }
    },
    divider:{
      marginLeft: '56px',
    },
  }),
);


export interface ContactListItemProps {
    type: 'connections' | 'invites' | 'suggested';
    peopleNumber: number;
}

export default function ContactListItem(props: ContactListItemProps) {
  const classes = useStyles();

  const renderText = (type: 'connections' | 'invites' | 'suggested'): string => {
    switch (type) {
      case 'connections':
        return 'contacts';
      case 'invites':
        return 'received';
      case 'suggested':
        return 'suggested';
      default:
        return '';
    }
  };

  return (
    <>
      <ListItem alignItems="flex-start" className={classes.root}>
        <ListItemAvatar>
          <Icon type={props.type} />
        </ListItemAvatar>
        <ListItemText
          primary={props.type}
          className={classes.primaryText}
          secondary={
            <>
              <Typography
                className={classes.inline}
                color="textPrimary"
              >
                {`${props.peopleNumber} ${renderText(props.type)}`}
              </Typography>
            </>
          }
        />
      </ListItem>
      <Divider variant="inset" className={classes.divider} />
    </>
  );
}