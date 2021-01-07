import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs } from "@storybook/addon-knobs";
import ContactIcon, { ContactIconProps } from '../ContactIcon';

export default {
    title: 'People/Atoms/ContactIcon',
    component: ContactIcon,
    decorators: [withKnobs]
} as Meta;

const IconTemplate: Story<ContactIconProps> = (args) => <ContactIcon {...args} />;

export const ConnectionsIcon = IconTemplate.bind({});
ConnectionsIcon.args = {
    type: 'connections'
}

export const InvitesIcon = IconTemplate.bind({});
InvitesIcon.args = {
    type: 'invites'
}

export const SuggestedIcon = IconTemplate.bind({});
SuggestedIcon.args = {
    type: 'suggested'
}

