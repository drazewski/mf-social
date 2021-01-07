import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import PeopleListItem from '../molecules/PeopleListItem';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      width:'100%',
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',
        height: '100%',
      },
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        paddingBottom:'36px'
    },
    header:{
      padding:'16px'
    },
    link: {
      position:'absolute',
      right:'16px',
      top:'16px',
      color:'#317CD5'
    },
    paper:{
      position:'relative'
    }
  }),
);

export default function PeopleSuggestions(): JSX.Element {
  const classes = useStyles();

  var invitesData = [
      {
          name:'Jane Lane',
          jobTitle:'Nurse',
          src:'./profilePic3.jpg'
      },
      {
        name:'Roger Bensen',
        jobTitle:'Consultant',
        src:'./profilePic9.jpg'
      },
      {
        name:'Shirly Benn',
        jobTitle:'Consultant',
        src:'./profilePic4.jpg'
      }
  ]

  const preventDefault = (event: React.SyntheticEvent) => event.preventDefault();

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography variant="h2" className={classes.header}>
            Suggestions
        </Typography>
        <Typography className={classes.link}>
          <Link href="#" onClick={preventDefault} style={{color:'#317CD5'}}>
            See all 10
          </Link>
        </Typography>
        <Divider />
        <List className={classes.list} disablePadding>
            {invitesData.map((invite , i) => 
                <PeopleListItem 
                    name={invite.name} 
                    src={invite.src} 
                    listType='suggested'
                    jobTitle={invite.jobTitle}
                    key={`${invite.name}-${i}`}
                />
            )}
        </List>
      </Paper>
    </div>
  );
}