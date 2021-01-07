import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs } from "@storybook/addon-knobs";
import PeoplePage from '../PeoplePage';

export default {
    title: 'People/Pages/PeoplePage',
    component: PeoplePage,
    decorators: [withKnobs]
} as Meta;

export const PeoplePageWithLayout: Story = () => <PeoplePage />;