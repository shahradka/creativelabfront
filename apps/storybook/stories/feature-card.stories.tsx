import type { Meta, StoryObj } from '@storybook/react';
import { FeatureCard } from '@creativelabfront/ui/components/feature-card';
import '@creativelabfront/ui-creativelab';
import '../global.css';

const meta: Meta<typeof FeatureCard> = {
  component: FeatureCard,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof FeatureCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => <FeatureCard number="14+" desc="Years" />,
  name: 'Header',
  args: {},
};
