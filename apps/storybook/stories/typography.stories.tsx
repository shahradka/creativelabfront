import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@creativelabfront/ui/components/typography';
import '@creativelabfront/ui';
import '../global.css';

const meta: Meta<typeof Typography> = {
  component: Typography,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof Typography>;

export const Primary: Story = {
  render: (props) => <Typography {...props}></Typography>,
  name: 'typography',
  args: {
    children: 'Different Text Size',
    color: 'primary',
    weight: 'normal',
    as: 'h1',
    variant: 'medium',
  },
};
