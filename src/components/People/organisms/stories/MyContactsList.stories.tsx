import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { withKnobs } from "@storybook/addon-knobs";

import MyContactsList, { ContactsListsProps } from "../MyContactsList";

export default {
    title: 'People/Organisms/MyContactsList',
    component: MyContactsList,
    decorators: [withKnobs]
} as Meta;

export const ContactList: Story<ContactsListsProps> = (args) => <MyContactsList {...args} />;
ContactList.args = {
    contactsData: [
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
      ],
}