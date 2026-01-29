import type { Meta, StoryObj } from '@storybook/react';
import { LastJobPosition } from '@creativelabfront/ui-creativelab/components/last-job-position';
import '@creativelabfront/ui-creativelab';
import '../global.css';

const meta: Meta<typeof LastJobPosition> = {
  component: LastJobPosition,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof LastJobPosition>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <LastJobPosition />,
  name: 'Header',
  args: {},
};
