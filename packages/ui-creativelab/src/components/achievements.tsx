import { FeatureCard } from '@creativelabfront/ui/components/feature-card';
import React from 'react';
import { cn } from '../lib/utils.js';
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
  return <FeatureBadge classNameHighlight="highlight-experience" {...props} />;
};

export const ProjectsBadge: React.FC<React.ComponentProps<typeof FeatureCard>> = (props) => {
  return <FeatureBadge classNameHighlight="highlight-projects" {...props} />;
};

export const SkillsBadge: React.FC<React.ComponentProps<typeof FeatureCard>> = (props) => {
  return <FeatureBadge classNameHighlight="highlight-skills" {...props} />;
};

export const Achievements: React.FC<
  React.ComponentProps<'div'> & { experiences: string; projects: string; skills: string }
> = ({ children, ...props }) => {
  return (
    <div className="flex gap-10 w-full justify-between items-space">
      <ExperienceBadge number={props.experiences} desc="Years" />
      <ProjectsBadge number={props.projects} desc="Projects" />
      <SkillsBadge number={props.skills} desc="Skills" />
    </div>
  );
};
