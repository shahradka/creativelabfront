import { Typography } from '@creativelabfront/ui/components/typography';
import { FC } from 'react';

export const WhoAmI: FC<React.ComponentProps<'div'>> = ({ children, ...restProps }) => {
  return (
    <div className="flex" {...restProps}>
      <div className="flex flex-col px-10 items-center gap-2 font-lora italic">{children}</div>
    </div>
  );
};
