import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '../atoms/PeopleAvatar';
import Typography from '@material-ui/core/Typography';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import PeopleButton from "../atoms/PeopleButton";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding:0,
      marginTop:0,
    },
    inline: {
      display: 'inline',
      color:'#888888'
    },
    primaryText:{
        margin:'16px 0 0 16px',
    },
    divider:{
        padding:'0px 0 0 0px'
    },
    Avatar:{
        margin:'11px 0 0 0px'
    },
    buttonContainer:{
        width:'100%',
        marginTop:'5px',
        marginRight:'-12px'
    }

  }),
);

type PeopleListType = 'invites' | 'suggested';

export interface PeopleListItemProps {
    name: string;
    jobTitle: string;
    listType: PeopleListType;
    src: string;
}

export default function PeopleListItem(props: PeopleListItemProps): JSX.Element {
  const classes = useStyles();

  return (
    <>
      <ListItem alignItems="flex-start" className={classes.root} disableGutters>
        <ListItemAvatar className={classes.Avatar}>
          <Avatar name={props.name} src={props.src} />
        </ListItemAvatar>
        <ListItemText
          primary={props.name}
          className={classes.primaryText}
          secondary={
            <>
              <Typography
                component="span"
                variant="body2"
                className={classes.inline}
                color="textPrimary"
              >
                {props.jobTitle}
              </Typography>
            </>
          }
        />
        <ListItemSecondaryAction className={classes.buttonContainer}>
                <PeopleButton 
                    label={props.listType === 'invites' ? 'Accept' : 'Connect'}
                    color={props.listType === 'invites' ? 'green' : 'blue'}
                    action={() => {}}
                />
                
                { props.listType === 'invites' && <PeopleButton 
                    label='Decline'
                    color='none'
                    action={() => {}}
                    />
                }
        </ListItemSecondaryAction>
      </ListItem>
      <Divider variant="inset" component="div" className={classes.divider} />
    </>
  );
}