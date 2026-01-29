import { Button } from '@creativelabfront/ui/components/button';
import { cn } from '../lib/utils';
export const ExploreButton = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      className={cn(`gradient-button max-w-[159px] shadow-md`, className)}
      size="lg"
      {...restProps}
    >
      {children}
    </Button>
  );
};

export const LearnMoreButton = ({
  className,
  children,
  ...restProps
}: React.ComponentProps<typeof Button>) => {
  return (
    <Button
      className={cn(
        `border-chart-3 max-w-[159px]  hover:bg-chart-3 hover:text-primary-foreground text-chart-3`,
        className
      )}
      variant="outline"
      size="lg"
      {...restProps}
    >
      {children}
    </Button>
  );
};
