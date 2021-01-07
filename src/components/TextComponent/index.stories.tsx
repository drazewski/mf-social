import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
import Index from './index';
import { withKnobs } from "@storybook/addon-knobs";

export default {
    title: 'Test/Index',
    component: Index,
    argTypes: {
      backgroundColor: { control: 'color' },
    },
    decorators: [withKnobs]
  } as Meta;

const Template: Story = (args) => <Index />;

export const TextComponent = Template.bind({});