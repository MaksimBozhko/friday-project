import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuperButton from '../common/components/superComponents/superButton/SuperButton';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Example/superButton',
  component: SuperButton,
  argTypes: {

  },
} as ComponentMeta<typeof SuperButton>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof SuperButton> = (args) => <SuperButton {...args} >default</SuperButton>;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {

};

export const Secondary = Template.bind({});
Secondary.args = {
  xType: 'secondary',
  onChange: action('action')
};

export const Disabled = Template.bind({});
Disabled.args = {
  xType: 'secondary',
  onChange: action('action'),
  disabled: true
};

