import { Container } from '@material-ui/core';
import React from 'react';
import PeopleInvites from '../organisms/PeopleInvites';
import PeopleSuggestions from '../organisms/PeopleSuggestions';

export default function PeopleLists(): JSX.Element {
    return (
        <Container>
            <PeopleInvites />
            <PeopleSuggestions />
        </Container>
    )
}