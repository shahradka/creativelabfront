import { SpecialCard } from '@creativelabfront/ui/components/special-card';
import { Typography } from '@creativelabfront/ui/components/typography';
import appLogo from '../assets/images/companies/app-logo-circular.svg';
import codetechLogo from '../assets/images/companies/codetech-logo-circular.svg';
import tataLogo from '../assets/images/companies/tata-logo-circular.svg';
import samanepaydarLogo from '../assets/images/companies/samanepaydar-logo.circular.svg';

export const Timeline = () => {
  return (
    <div className="size-full relative">
      <div className="flex flex-col py-60">
        <Typography className="text-center py-5" weight="semiBold">
          Companies I have worked in them
        </Typography>
        <div className="grid grid-cols-2 gap-15 px-5">
          <SpecialCard
            gradientClassName="bg-linear-65 from-purple-500 to-pink-500"
            logo={<img src={appLogo.src} alt="App Logo" />}
            title="Asan Pardakht Persian (APP)"
            subTitle="Senior Software Engineer"
          />
          <SpecialCard
            gradientClassName="bg-linear-65 from-orange-500 to-sky-500"
            titleClassName="text-orange-500"
            logo={<img src={codetechLogo.src} alt="codetech Logo" />}
            title="CodeTech"
            subTitle="Senior Software Engineer"
          />
          <SpecialCard
            gradientClassName="bg-linear-65 from-teal-300 to-teal-600"
            titleClassName="text-primary"
            logo={<img src={tataLogo.src} alt="tata Logo" />}
            title="Tata"
            subTitle="Senior Software Engineer"
          />
          <SpecialCard
            gradientClassName="bg-linear-to-r from-cyan-500 to-blue-500"
            titleClassName="text-secondary"
            logo={<img src={samanepaydarLogo.src} alt="Samane Paydar Logo" />}
            title="Samane Paydar"
            subTitle="Fullstack Developer"
          />
        </div>
      </div>
    </div>
  );
};
