import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SuperRange from '../common/components/superComponents/superRange/SuperRange';

export default {
  title: 'Example/SuperRange',
  component: SuperRange,
  argTypes: {

  },
} as ComponentMeta<typeof SuperRange>;

const Template: ComponentStory<typeof SuperRange> = (args) => <SuperRange {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  value: 50,
  onChange:action('action')
};


