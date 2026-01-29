import type { Meta, StoryObj } from '@storybook/react';
import { SkillSet } from '@creativelabfront/ui-creativelab/components/skill-set';

import '@creativelabfront/ui-creativelab';
import '../global.css';

const meta: Meta<typeof SkillSet> = {
  component: SkillSet,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof SkillSet>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <div className="flex justify-center">
      <SkillSet />
    </div>
  ),
  name: 'Basic',
  args: {},
};
