import { cn } from '../lib/utils.js';
import { Typography } from './typography.js';

export const FeatureCard = ({
  number,
  desc,
  className,
  ...restProps
}: React.ComponentProps<'div'> & { number: string; desc: string }) => {
  return (
    <div className={cn('rounded feature-card', className)} {...restProps}>
      <Typography variant="5xl" weight="bold" className="number">
        {number}
      </Typography>
      <Typography variant="small">{desc}</Typography>
    </div>
  );
};
