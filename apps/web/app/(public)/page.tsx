import { cn } from '@/lib/utils';
import { Achievements } from '@creativelabfront/ui-creativelab/components/achievements';
import { HeroBase } from '@creativelabfront/ui-creativelab/components/hero-base';
import {
  ExploreButton,
  LearnMoreButton,
} from '@creativelabfront/ui-creativelab/components/hero-buttons';

const landingRegion = 'w-full overflow-hidden items-center';

export default function Page() {
  return (
    <div>
      <div
        className={cn(
          'flex flex-col bg-hero-background relative h-[calc(100vh-90px)]',
          landingRegion
        )}
      >
        <div className="hero-wave light" />
        <div className="size-full max-w-7xl">
          <HeroBase
            title="Creativity"
            subtitle1="Runs In"
            subtitle2="Our Veins"
            descriptions="Unlocking Tomorrow’s Intelligence"
          >
            <div className="flex flex-col gap-3 flex-start">
              <ExploreButton> Explore Solution</ExploreButton>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </div>
          </HeroBase>
        </div>
      </div>
      <div className={cn(landingRegion, 'bg-background h-screen flex flex-col')}>
        <div className="size-full max-w-7xl flex flex-col justify-center">
          <Achievements experiences="14+" projects="50+" skills="30+" />
        </div>
      </div>
    </div>
  );
}
