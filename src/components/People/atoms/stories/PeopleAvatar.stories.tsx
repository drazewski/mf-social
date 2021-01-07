import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs } from "@storybook/addon-knobs";
import PeopleAvatar, { PeopleAvatarProps } from '../PeopleAvatar';

export default {
    title: 'People/Atoms/PeopleAvatar',
    component: PeopleAvatar,
    decorators: [withKnobs]
} as Meta;

const AvatarTemplate: Story<PeopleAvatarProps> = (args) => <PeopleAvatar {...args} />;

export const PeopleAvatarWithImage = AvatarTemplate.bind({});
PeopleAvatarWithImage.args = {
    name:'Jeff Green',
    src:'./profilePic1.jpg'
}

export const PeopleAvatarWithNoImage = AvatarTemplate.bind({});
PeopleAvatarWithNoImage.args = {
    name:'Jeff Green',
    src:'./notfound.jpg'
}