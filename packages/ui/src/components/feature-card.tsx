import { cn } from '../lib/utils';
import { Card } from './card';
import { Typography } from './typography';

export const FeatureCard = ({
  number,
  desc,
  className,
  ...restProps
}: React.ComponentProps<'div'> & { number: React.ReactNode; desc: string }) => {
  return (
    <Card className={cn('rounded feature-card', className)} {...restProps}>
      <Typography variant="5xl" weight="bold" className="number">
        {number}
      </Typography>
      <Typography variant="small">{desc}</Typography>
    </Card>
  );
};
