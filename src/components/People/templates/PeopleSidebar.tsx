import { makeStyles, Typography } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import MyContactsList from '../organisms/MyContactsList';

const Header = styled.header`
  padding-bottom: 60px;
`;

const useStyles = makeStyles(() => ({
  title: {
    paddingBottom: '15px'
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    fontWeight: 400,
  }
}));

export interface ContactsDataInterface {
  type: 'connections' | 'invites' | 'suggested';
  peopleNumber: number;
}

const PeopleSidebar = (): JSX.Element => {
  const classes = useStyles();

  const contactsData: ContactsDataInterface[] = [
    {
      type: 'connections',
      peopleNumber: 20,
    },
    {
      type: 'invites',
      peopleNumber: 10,
    },
    {
      type: 'suggested',
      peopleNumber: 200,
    }
  ]

  return (
    <>
      <Header>
        <Typography variant="h1" className={classes.title} >
          People
        </Typography>
        <Typography variant="h3" className={classes.subtitle}>
          {`${contactsData[0].peopleNumber} contacts`}
        </Typography>
      </Header>
      <MyContactsList contactsData={contactsData}/>
    </>
  )
}

export default PeopleSidebar;
