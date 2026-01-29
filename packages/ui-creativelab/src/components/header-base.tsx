import React from 'react';
import { Typography } from '@creativelabfront/ui/components/typography';
import logoImg from '../assets/images/logo.svg';

export const HeaderBase = ({
  title = '',
  logo,
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
  title: string;
  logo?: React.ReactNode;
}) => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo-place">
          <span>{logo ?? <img src={logoImg.src} />}</span>
          <Typography
            className="text-header-foreground"
            as="span"
            variant="medium"
            weight="semiBold"
          >
            {title}
          </Typography>
        </div>
        <nav className="nav right">
          <ul className="flex h-full">
            {React.Children.map(children, (child, index) => (
              <li className="item" key={index}>
                {child}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};
