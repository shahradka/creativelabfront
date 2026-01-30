import type { Meta, StoryObj } from '@storybook/react';
import { HeroBase } from '@creativelabfront/ui-creativelab/components/hero-base';
import '@creativelabfront/ui-creativelab';
import { WhoAmI } from '@creativelabfront/ui-creativelab/components/who-am-I';
import '../global.css';

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
  render: () => <WhoAmI />,
  name: 'WhoAmI',
  args: {},
};
