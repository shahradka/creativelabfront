import { cn } from '../lib/utils';
import { Card, CardContent, CardHeader } from './card';
import { Typography } from './typography';

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
    <Card className={cn('pt-0 overflow-hidden shadow-lg bg-card', props.className)}>
      <div className={cn('h-2 top-0', gradientClassName)} />
      <CardHeader className="border-b-2 border-muted">
        <div className="flex gap-2 items-center">
          <div className="size-20">{logo}</div>
          <div className="flex flex-col gap-2">
            <Typography weight="semiBold" className={titleClassName}>
              {title}
            </Typography>
            <Typography variant="small">{subTitle}</Typography>
          </div>
        </div>
      </CardHeader>
      <CardContent className="flex gap-5 flex-col" {...props}>
        <div className="px-5">{children}</div>
      </CardContent>
    </Card>
  );
};
