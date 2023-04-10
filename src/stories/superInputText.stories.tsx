import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SuperInputText from '../common/components/superComponents/superInputText/SuperInputText';

export default {
  title: 'Example/SuperInputText',
  component: SuperInputText,
  argTypes: {

  },
} as ComponentMeta<typeof SuperInputText>;

const Template: ComponentStory<typeof SuperInputText> = (args) => <SuperInputText {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Primary',
  onChange:action('action')
};

export const Error = Template.bind({});
Error.args = {
  value: '',
  onChange: action('onEnter'),
  error:'error'
};

