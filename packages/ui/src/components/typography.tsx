import { cn } from '../lib/utils.js';
import type { ElementType, ComponentPropsWithoutRef } from 'react';

/**
 * Tailwind font sizes (px)
 * xs: 12 | sm: 14 | base: 16 | lg: 18 | xl: 20
 * 2xl: 24 | 3xl: 30 | 4xl: 36 | 5xl: 48
 * 6xl: 60 | 7xl: 72 | 8xl: 96 | 9xl: 128
 */
export const typographyVariants = {
  '6xl': '6xl',
  '5xl': '5xl',
  '4xl': '4xl',
  '3xl': '3xl',
  '2xl': '2xl',
  xl: 'xl',
  large: 'lg',
  medium: 'base',
  small: 'sm',
  xs: 'xs',
  '2xs': '2xs',
};

export const typographyWeight = {
  thin: 'thin',
  normal: 'normal',
  semiBold: 'semi-bold',
  bold: 'bold',
};

export const typographyColor = {
  primary: 'foreground',
  secondary: 'secondary',
  muted: 'muted',
};

type TypographyVariant = keyof typeof typographyVariants;

type TypographyWeight = keyof typeof typographyWeight;

type TypographyColor = keyof typeof typographyColor;

type TypographyProps<T extends ElementType> = {
  as?: T;
  variant?: TypographyVariant;
  weight?: TypographyWeight;
  color?: TypographyColor;
  children: React.ReactNode;
} & ComponentPropsWithoutRef<T>;

export function Typography<T extends ElementType = 'span'>({
  as,
  variant = 'medium',
  weight = 'normal',
  color = 'primary',
  className,
  ...props
}: TypographyProps<T>) {
  const Component = as || 'p';

  return (
    <Component
      className={cn(
        'font-inter',
        `text-${typographyVariants[variant]}`,
        cn(`font-${typographyWeight[weight]}`),
        cn(`text-${typographyColor[color]}`),
        className
      )}
      {...props}
    />
  );
}
