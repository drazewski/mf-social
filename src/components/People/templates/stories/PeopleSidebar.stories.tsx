import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs } from "@storybook/addon-knobs";
import PeopleSidebar from '../PeopleSidebar';

export default {
  title: 'People/Templates/PeopleSidebar',
  component: PeopleSidebar,
  decorators: [withKnobs]
} as Meta;

export const Sidebar: Story = () => <PeopleSidebar />;