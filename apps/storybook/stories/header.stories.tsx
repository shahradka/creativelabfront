import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from '@creativelabfront/ui/components/typography';
import { HeaderBase } from '@creativelabfront/ui-creativelab/components/header-base';
import '@creativelabfront/ui-creativelab';
import '../global.css';

const meta: Meta<typeof HeaderBase> = {
  component: HeaderBase,
  argTypes: {
    type: {},
  },
};

export default meta;

type Story = StoryObj<typeof HeaderBase>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: () => (
    <HeaderBase title="CreativeLab">
      <a>
        <Typography className="text-header-foreground" variant="small">
          Current
        </Typography>
      </a>
      <a>
        <Typography className="text-header-foreground" variant="small">
          Programming
        </Typography>
      </a>
      <a>
        <Typography className="text-header-foreground" variant="small">
          Designs
        </Typography>
      </a>
      <a>
        <Typography className="text-header-foreground" variant="small">
          My CV
        </Typography>
      </a>
    </HeaderBase>
  ),
  name: 'Header',
  args: {},
};
