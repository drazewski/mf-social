import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs } from "@storybook/addon-knobs";
import PeopleLists from '../PeopleLists';

export default {
    title: 'People/Templates/PeopleLists',
    component: PeopleLists,
    decorators: [withKnobs]
} as Meta;

export const Lists: Story = () => <PeopleLists />;