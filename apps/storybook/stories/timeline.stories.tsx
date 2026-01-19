import type { Meta, StoryObj } from '@storybook/react';
import { Timeline } from '@creativelabfront/ui-creativelab/components/timeline';
import '@creativelabfront/ui-creativelab';

const meta: Meta<typeof Timeline> = {
  component: Timeline,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof Timeline>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <div className="h-full">
      <Timeline />
    </div>
  ),
  name: 'Header',
  args: {},
};
