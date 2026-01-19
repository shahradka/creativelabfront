import type { Meta, StoryObj } from '@storybook/react';
import { SpecialCard } from '@creativelabfront/ui/components/special-card';
import noImage from '../assets/images/no-image.svg';
import '@creativelabfront/ui';

const meta: Meta<typeof SpecialCard> = {
  component: SpecialCard,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof SpecialCard>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (props) => (
    <SpecialCard
      gradientClassName=" bg-linear-to-r from-cyan-500 to-blue-500"
      title="Tata"
      logo={<img src={noImage} alt="No Image" />}
      {...props}
    >
      Setup a new project for the main product admin panel. Developed a full RBAC system with Jose
      and Keycloak for the admin panel. Resolved 80% of the security issues, such as adding security
      headers and node module vulnerabilities of the main
    </SpecialCard>
  ),
  name: 'SpecialCard',
  args: {},
};
