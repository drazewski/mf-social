import React from 'react';
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1
import { Story, Meta } from '@storybook/react/types-6-0';
import { withKnobs } from "@storybook/addon-knobs";
import PeopleButton, { PeopleButtonProps } from '../PeopleButton';

export default {
    title: 'People/Atoms/PeopleButton',
    component: PeopleButton,
    decorators: [withKnobs]
  } as Meta;

  const ButtonTemplate: Story<PeopleButtonProps> = (args) => <PeopleButton {...args} />;

  export const AcceptButton = ButtonTemplate.bind({});
  AcceptButton.args = {
      label:'Accept',
      color:'green',
      action:() => {}
  }

  export const ConnectButton = ButtonTemplate.bind({});
  ConnectButton.args = {
      label:'Connect',
      color:'blue',
      action:() => {}
  }

  export const DeclineButton = ButtonTemplate.bind({});
  DeclineButton.args = {
      label:'Decline',
      color:'none',
      action:() => {}
  }

