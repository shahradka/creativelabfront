import { cn } from '../lib/utils.js';
import { Card, CardContent } from './card.js';
import { Typography } from './typography.js';

export const SpecialCard = ({
  children,
  gradientClassName = '',
  titleClassName = '',
  logo,
  title,
  subTitle,
  ...props
}: React.ComponentProps<typeof Card> & {
  gradientClassName?: string;
  titleClassName?: string;
  logo?: React.ReactNode;
  title?: string;
  subTitle?: string;
}) => {
  return (
    <Card className="pt-0 overflow-hidden shadow-lg bg-background">
      <div className={cn('h-2 top-0', gradientClassName)} />
      <CardContent className="flex gap-5 flex-col" {...props}>
        <div className="flex gap-2 items-center">
          <div className="size-20">{logo}</div>
          <div className="flex flex-col gap-2">
            <Typography weight="semiBold" className={titleClassName}>
              {title}
            </Typography>
            <Typography variant="small" color="muted">
              {subTitle}
            </Typography>
          </div>
        </div>
        {children}
      </CardContent>
    </Card>
  );
};
