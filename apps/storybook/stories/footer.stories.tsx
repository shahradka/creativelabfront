import type { Meta, StoryObj } from '@storybook/react';
import { Footer } from '@creativelabfront/ui-creativelab/components/footer';
import { MenuItems } from '@creativelabfront/ui-creativelab/constants/menu-items';
import '@creativelabfront/ui-creativelab';
import { Typography } from '@creativelabfront/ui/components/typography';

const meta: Meta<typeof Footer> = {
  component: Footer,
  argTypes: {},
};

export default meta;

type Story = StoryObj<typeof Footer>;

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/react/api/csf
 * to learn how to use render functions.
 */

export const Primary: Story = {
  render: () => (
    <Footer>
      <div className="flex justify-around">
        {MenuItems.map((menuItem) => {
          if (menuItem.parentId === null)
            return (
              <div key={menuItem.id} className="flex flex-col items-center gap-1 w-40 px-6">
                <Typography color="muted">{menuItem.label}</Typography>
                <div className="w-full h-1 bg-gradient-to-r from-zinc-50/10 via-neutral-500 to-zinc-50/10" />
                <div className="flex flex-col gap-5">
                  {MenuItems.filter((menuChildItem) => menuChildItem.parentId === menuItem.id).map(
                    (child) => (
                      <Typography key={child.id}>{child.label}</Typography>
                    )
                  )}
                </div>
              </div>
            );
        })}
      </div>
    </Footer>
  ),
  name: 'Footer',
  args: {},
};
