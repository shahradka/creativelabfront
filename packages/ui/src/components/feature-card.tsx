import { cn } from '../lib/utils.js';
import { Typography } from './typography.js';

export const FeatureCard = ({
  number,
  desc,
  className,
  ...restProps
}: React.ComponentProps<'div'> & { number: string; desc: string }) => {
  return (
    <div className={cn('rounded', className)} {...restProps}>
      <Typography variant="3xl">{number}</Typography>
      <Typography variant="medium">{number}</Typography>
    </div>
  );
};
