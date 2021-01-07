import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { withKnobs } from "@storybook/addon-knobs";

import ContactListItem, { ContactListItemProps } from '../ContactListItem';

export default {
    title: 'People/Molecules/ContactListItem',
    component: ContactListItem,
    decorators: [withKnobs]
} as Meta;

export const ListItemConnections: Story<ContactListItemProps> = (args) => <ContactListItem {...args} />;
ListItemConnections.args = {
    type: 'connections',
    peopleNumber: 20,
}

export const ListItemInvites: Story<ContactListItemProps> = (args) => <ContactListItem {...args} />;
ListItemInvites.args = {
    type: 'invites',
    peopleNumber: 120,
}

export const ListItemSuggested: Story<ContactListItemProps> = (args) => <ContactListItem {...args} />;
ListItemSuggested.args = {
    type: 'suggested',
    peopleNumber: 1,
}