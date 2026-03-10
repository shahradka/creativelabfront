import { FeatureCard } from '@creativelabfront/ui/components/feature-card';
import React from 'react';
import { cn } from '../lib/utils';
export const FeatureBadge: React.FC<
  React.ComponentProps<typeof FeatureCard> & { classNameHighlight?: string }
> = ({ classNameHighlight, ...props }) => {
  return (
    <div className={cn('feature-badge', classNameHighlight)}>
      <FeatureCard {...props} />
    </div>
  );
};

export const ExperienceBadge: React.FC<React.ComponentProps<typeof FeatureCard>> = (props) => {
  return <FeatureBadge {...props} />;
};

export const ProjectsBadge: React.FC<React.ComponentProps<typeof FeatureCard>> = (props) => {
  return <FeatureBadge {...props} />;
};

export const SkillsBadge: React.FC<React.ComponentProps<typeof FeatureCard>> = (props) => {
  return <FeatureBadge {...props} />;
};

export const Achievements: React.FC<
  React.ComponentProps<'div'> & {
    experiences: React.ReactNode;
    projects: React.ReactNode;
    skills: React.ReactNode;
  }
> = ({ ref, className, ...props }) => {
  return (
    <div
      ref={ref}
      className={cn('flex gap-10 w-full justify-between items-space', className)}
      {...props}
    >
      <ExperienceBadge number={props.experiences} desc="Years" />
      <ProjectsBadge number={props.projects} desc="Projects" />
      <SkillsBadge number={props.skills} desc="Skills" />
    </div>
  );
};
