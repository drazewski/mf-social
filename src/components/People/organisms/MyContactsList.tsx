import React from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import ContactListItem from '../molecules/ContactListItem';
import { ContactsDataInterface } from '../templates/PeopleSidebar';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    header:{
      fontSize: '14px',
      margin: 0,
      padding: '0 0 20px 0',
    },
    divider:{
      marginLeft: '56px',
    },
  }),
);

export interface ContactsListsProps {
  contactsData: ContactsDataInterface[];
}

export default function MyContactsList({ contactsData }: ContactsListsProps): JSX.Element {
  const classes = useStyles();

  return (
    <div>
      <Typography variant="h3" component="h3" className={classes.header}>
        My Contacts
      </Typography>
      <Divider variant="inset" className={classes.divider} />
      <div>
        {contactsData.map(item => <ContactListItem key={item.type} type={item.type} peopleNumber={item.peopleNumber} />)}
      </div>
    </div>
  );
}