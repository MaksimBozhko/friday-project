import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from '@storybook/addon-actions';
import SuperSelect from '../common/components/superComponents/superSelect/SuperSelect';

export default {
  title: 'Example/SuperSelect',
  component: SuperSelect,
  argTypes: {

  },
} as ComponentMeta<typeof SuperSelect>;

const arr = [
  { id: 1, value: 'Pre-junior' },
  { id: 2, value: 'Junior' },
  { id: 3, value: 'Junior +' },
]

const Template: ComponentStory<typeof SuperSelect> = (args) => <SuperSelect {...args}/>;

export const Primary = Template.bind({});
Primary.args = {
  options:arr,
  value:'value',
  onChangeOption:action('onChangeOption')
}

