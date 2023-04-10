import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import SuperCheckbox from '../common/components/superComponents/superCheckbox/SuperCheckbox';
import {action} from '@storybook/addon-actions';

export default {
  title: 'Example/superCheckBox',
  component: SuperCheckbox,
  argTypes: {

  },
} as ComponentMeta<typeof SuperCheckbox>;

const Template: ComponentStory<typeof SuperCheckbox> = (args) => <SuperCheckbox onChangeChecked={action('checked')} />;

export const True = Template.bind({});
True.args = {
  onChangeChecked: action('checked')
};

export const False = Template.bind({});
False.args = {
  onChangeChecked: action('checked')
};

