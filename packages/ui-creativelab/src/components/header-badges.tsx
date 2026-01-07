import { Typography } from '@creativelabfront/ui/components/typography';
import { cn } from '../lib/utils.js';

export const featureCard = ({
  number,
  caption,
  className,
  ...restProps
}: React.ComponentProps<'div'> & { number?: number; caption?: string }) => {
  return (
    <div className={cn('flex flex-col', className)} {...restProps}>
      <Typography variant="3xl" weight="bold" className="shadow-md">
        {number}
      </Typography>
      <Typography variant="medium">{caption}</Typography>
    </div>
  );
};
