import React from 'react';
import earlener from '../assets/images/earlener-flask.png';
import wave from '../assets/images/hero-wave-background.svg';
import { Typography } from '@creativelabfront/ui/components/typography';

interface HeroBaseProps {
  title: string;
  subtitle1?: string;
  subtitle2?: string;
  descriptions?: string;
  heroImage?: React.ReactNode;
  ctaText?: string;
  onCtaClick?: () => void;
  children?: React.ReactNode;
}

export const HeroBase: React.FC<HeroBaseProps> = ({
  title,
  subtitle1,
  subtitle2,
  descriptions,
  heroImage,
  children,
}) => {
  return (
    <section className="hero">
      <div className="content">
        <div className="heading">
          <div className="flex flex-wrap gap-5">
            <Typography variant="5xl" weight="bold" as="span" className="gradient-text">
              {title}{' '}
            </Typography>
            <Typography variant="5xl" weight="bold" as="span" className="text-white">
              {subtitle1}{' '}
            </Typography>
            <Typography
              variant="5xl"
              weight="bold"
              as="span"
              className="text-border-destructive-40"
            >
              {subtitle2}
            </Typography>
          </div>
          <Typography as="p" variant="medium" className="text-white">
            {descriptions}
          </Typography>
          {children}
        </div>
        <div className="representing">{heroImage ?? <img src={earlener.src} />}</div>
      </div>
    </section>
  );
};
