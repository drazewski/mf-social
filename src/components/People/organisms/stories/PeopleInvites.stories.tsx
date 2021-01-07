import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { withKnobs } from "@storybook/addon-knobs";

import PeopleInvites from "../PeopleInvites";

export default {
    title: 'People/Organisms/PeopleInvites',
    component: PeopleInvites,
    decorators: [withKnobs]
} as Meta;

export const Invites: Story = (args) => <PeopleInvites />;