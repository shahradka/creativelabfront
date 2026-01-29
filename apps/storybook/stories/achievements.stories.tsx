import type { Meta, StoryObj } from '@storybook/react';
import { Achievements } from '@creativelabfront/ui-creativelab/components/achievements';
import '@creativelabfront/ui-creativelab';
import '../global.css';

const meta: Meta<typeof Achievements> = {
  component: Achievements,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof Achievements>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <Achievements experiences="14+" projects="50+" skills="30+" />,
  name: 'Header',
  args: {},
};
