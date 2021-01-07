import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';

import { withKnobs } from "@storybook/addon-knobs";

import PeopleSuggestions from "../PeopleSuggestions";

export default {
    title: 'People/Organisms/PeopleSuggestions',
    component: PeopleSuggestions,
    decorators: [withKnobs]
} as Meta;

export const Suggestions: Story = (args) => <PeopleSuggestions />;