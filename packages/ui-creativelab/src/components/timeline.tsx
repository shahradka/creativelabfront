import WaveTop from '../assets/images/wave-top.svg';
import waveBottom from '../assets/images/wave-bottom.svg';
import { SpecialCard } from '@creativelabfront/ui/components/special-card';
import { Typography } from '@creativelabfront/ui/components/typography';
import appLogo from '../assets/images/companies/app-logo-circular.svg';
import codetechLogo from '../assets/images/companies/codetech-logo-circular.svg';
import tataLogo from '../assets/images/companies/tata-logo-circular.svg';
import fanpardazLogo from '../assets/images/companies/fanpardaz-logo.circular.svg';

export const Timeline = () => {
  return (
    <div className="size-full relative">
      <img className="top-0 left-0 absolute" src={WaveTop} />
      <img className="bottom-0 right-0 absolute" src={waveBottom} />
      <div className="flex flex-col py-60">
        <Typography className="text-center py-5" weight="semiBold">
          Companies I have worked in them
        </Typography>
        <div className="grid grid-cols-2 gap-15 px-5">
          <SpecialCard
            gradientClassName="bg-linear-65 from-purple-500 to-pink-500"
            logo={<img src={appLogo} alt="App Logo" />}
            title="Asan Pardakht Persian (APP)"
            subTitle="Senior Software Engineer"
          />
          <SpecialCard
            gradientClassName="bg-linear-65 from-orange-500 to-sky-500"
            titleClassName="text-orange-500"
            logo={<img src={codetechLogo} alt="codetech Logo" />}
            title="CodeTech"
            subTitle="Senior Software Engineer"
          />
          <SpecialCard
            gradientClassName="bg-linear-65 from-teal-300 to-teal-600"
            titleClassName="text-cyan-500"
            logo={<img src={tataLogo} alt="tata Logo" />}
            title="Tata"
            subTitle="Senior Software Engineer"
          />
          <SpecialCard
            gradientClassName="bg-linear-to-r from-cyan-500 to-blue-500"
            titleClassName="text-sky-500"
            logo={<img src={fanpardazLogo} alt="fanpardaz Logo" />}
            title="Fanpardaz"
            subTitle="Fullstack Developer"
          />
        </div>
      </div>
    </div>
  );
};
