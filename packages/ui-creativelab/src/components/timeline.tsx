import { SpecialCard } from '@creativelabfront/ui/components/special-card';
import { Typography } from '@creativelabfront/ui/components/typography';
import appLogo from '../assets/images/companies/app-logo-circular.svg';
import codetechLogo from '../assets/images/companies/codetech-logo-circular.svg';
import tataLogo from '../assets/images/companies/tata-logo-circular.svg';
import samanepaydarLogo from '../assets/images/companies/samanepaydar-logo.circular.svg';
import { ComponentProps, FC } from 'react';

export const Timeline: FC<ComponentProps<'div'> & { cardClassName?: string }> = ({
  cardClassName,
  ...props
}) => {
  return (
    <div className="size-full relative" {...props}>
      <div className="flex flex-col py-60">
        <Typography className="text-center py-5" weight="semiBold">
          Companies I have worked in them
        </Typography>
        <div className="grid grid-cols-2 gap-15 px-5">
          <SpecialCard
            className={cardClassName}
            gradientClassName="bg-linear-65 from-purple-500 to-pink-500"
            logo={<img src={appLogo.src} alt="App Logo" />}
            title="Asan Pardakht Persian (APP)"
            subTitle="Senior Software Engineer"
          >
            <ul className="list-disc">
              <li>Built a 20+ feature admin panel, improving internal efficiency by 50%.</li>
              <li>Implemented RBAC authentication using Keycloak + Jose.</li>
              <li>Improved Core Web Vitals by 70% (Lighthouse 37 → 63).</li>
              <li>Reduced latency using microservice architecture (Saga, CQRS, API Gateway).</li>
              <li>Implemented CI/CD pipelines and applied OWASP security practices.</li>
            </ul>
          </SpecialCard>
          <SpecialCard
            className={cardClassName}
            gradientClassName="bg-linear-65 from-orange-500 to-sky-500"
            titleClassName="text-orange-500"
            logo={<img src={codetechLogo.src} alt="codetech Logo" />}
            title="CodeTech"
            subTitle="Senior Software Engineer"
          >
            <ul className="list-disc">
              <li>
                Delivered 6+ Web3 projects, including decentralized markets and mining platforms.
              </li>
              <li>Introduced GraphQL for efficient data querying and real-time updates.</li>
              <li>Built high-traffic frontend systems integrated with scalable APIs.</li>
              <li>Developed full-stack apps using Next.js, NestJS, Redis, PostgreSQL, Drizzle.</li>
              <li>Mentored developers and collaborated with cross-functional global teams.</li>
            </ul>
          </SpecialCard>
          <SpecialCard
            className={cardClassName}
            gradientClassName="bg-linear-65 from-teal-300 to-teal-600"
            titleClassName="text-primary"
            logo={<img src={tataLogo.src} alt="tata Logo" />}
            title="Tata"
            subTitle="Senior Software Engineer"
          >
            <ul className="list-disc">
              <li>Developed high-reliability banking services using Java / Spring.</li>
              <li>Improved frontend architecture and performance.</li>
              <li>Created a React boilerplate to standardize form development.</li>
              <li>Led coordination for 7 frontend developers and technical alignment.</li>
            </ul>
          </SpecialCard>
          <SpecialCard
            className={cardClassName}
            gradientClassName="bg-linear-to-r from-cyan-500 to-blue-500"
            titleClassName="text-secondary"
            logo={<img src={samanepaydarLogo.src} alt="Samane Paydar Logo" />}
            title="Samane Paydar"
            subTitle="Fullstack Developer"
          >
            <ul className="list-disc">
              <li>Built responsive web interfaces using HTML, CSS, and jQuery.</li>
              <li>Transitioned to backend development using Java and PostgreSQL.</li>
              <li>Optimized complex SQL queries and hierarchical data structures.</li>
              <li>Delivered end-to-end features from UI to database implementation.</li>
              <li>Progressed from Junior Frontend → Full-Stack Developer</li>
            </ul>
          </SpecialCard>
        </div>
      </div>
    </div>
  );
};
