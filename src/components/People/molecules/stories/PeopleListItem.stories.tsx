import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { withKnobs } from "@storybook/addon-knobs";

import PeopleListItem, { PeopleListItemProps } from '../PeopleListItem';

export default {
    title: 'People/Molecules/PeopleListItem',
    component: PeopleListItem,
    decorators: [withKnobs]
} as Meta;

export const ListItemInvite: Story<PeopleListItemProps> = (args) => <PeopleListItem {...args} />;
ListItemInvite.args = {
    name:'Mary Jones',
    src:'./profilePic3.jpg',
    listType:'invites',
    jobTitle:'Lab Assistant'
}

export const ListItemSuggested: Story<PeopleListItemProps> = (args) => <PeopleListItem {...args} />;
ListItemSuggested.args = {
    name:'Jim Smith',
    src:'./profilePic2.jpg',
    listType:'suggested',
    jobTitle:'Doctor'
}