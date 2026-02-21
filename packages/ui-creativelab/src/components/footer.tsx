import { Typography } from '@creativelabfront/ui/components/typography';
import { useMemo } from 'react';
import logoImg from '../assets/images/logo.svg';

export const Footer = ({ children, ...restProps }: React.ComponentProps<'div'>) => {
  const currentYear = useMemo(() => new Date().getFullYear(), []);
  return (
    <footer className="footer flex flex-col gap-16 pt-32 bg-black" {...restProps}>
      <div className="flex">
        <div className="basis-3/4 flex flex-col">{children}</div>
        <div className="basis-1/4 flex flex-col items-center gap-3">
          <img src={logoImg.src} alt="CreativeLab Logo" className="h-40 w-auto" />
          <Typography className="text-muted-foreground">CreativeLab</Typography>
        </div>
      </div>
      <Typography
        color="muted"
        className="w-full flex h-15 justify-center items-center"
      >{`© ${currentYear} CreativeLab. All rights reserved.`}</Typography>
    </footer>
  );
};
