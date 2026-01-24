import type { Meta, StoryObj } from '@storybook/react';
import { HeroBase } from '@creativelabfront/ui-creativelab/components/hero-base';
import {
  ExploreButton,
  LearnMoreButton,
} from '@creativelabfront/ui-creativelab/components/hero-buttons';
import '@creativelabfront/ui-creativelab';

const meta: Meta<typeof HeroBase> = {
  component: HeroBase,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof HeroBase>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <HeroBase
      title="Creativity"
      subtitle1="Runs In"
      subtitle2="Our Veins"
      descriptions="Unlocking Tomorrow’s Intelligence"
    >
      <div className="flex flex-col gap-3 flex-start">
        <ExploreButton> Explore Solution</ExploreButton>
        <LearnMoreButton>Learn More</LearnMoreButton>
      </div>
    </HeroBase>
  ),
  name: 'Header',
  args: {},
};
