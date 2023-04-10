import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SuperEditableSpan from '../common/components/superComponents/superEditableSpan/SuperEditableSpan';

export default {
  title: 'Example/superEditableSpan',
  component: SuperEditableSpan,
  argTypes: {

  },
} as ComponentMeta<typeof SuperEditableSpan>;

const Template: ComponentStory<typeof SuperEditableSpan> = (args) => <SuperEditableSpan {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  value: 'Primary',
  onChangeText:action('action')
};

export const Secondary = Template.bind({});
Secondary.args = {
  value: 'Secondary',
  onChangeText:action('action'),
  autoFocus: false
};

