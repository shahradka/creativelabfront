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
          >
            <ul>
              <li>
                Designed and deployed a completely new admin panel with over 20 functionalities,
                improving internal business efficiency by 50%.
              </li>
              <li>Developed a full RBAC system with Jose and Keycloak for the admin panel.</li>
              <li>
                Applied security header implementation, patch management on dependencies, and
                application of OWASP best practices to reduce significant security vulnerabilities.
              </li>
              <li>
                Achieved a 70% improvement in Core Web Vitals (LCP, CLS), resulting in an increase
                of Lighthouse from 37 to 63.
              </li>
              <li>
                Reduced services latency by implementing microservice patterns such as Saga –
                Choreography, CQRS, API Gateway.
              </li>
              <li>
                Contributed to rapidly growing software in the gold trading market, ensuring
                compatibility across multiple devices and environments, from iOS to Microsoft
                Windows
              </li>
              <li>Configured CI/CD pipelines for project deployments.</li>
              <li>Helped and guided my teammate to resolve their technical issues.</li>
            </ul>
          </SpecialCard>
          <SpecialCard
            gradientClassName="bg-linear-65 from-orange-500 to-sky-500"
            titleClassName="text-orange-500"
            logo={<img src={codetechLogo.src} alt="codetech Logo" />}
            title="CodeTech"
            subTitle="Senior Software Engineer"
          >
            <ul>
              <li>
                Delivered 6+ web3 projects, including decentralized markets and a mining pool
                monitoring platform.
              </li>
              <li>Proposed GraphQL for efficient data querying and real-time updates.</li>
              <li>
                Suggested modifications to the Figma design to achieve a pixel-perfect result.
              </li>
              <li>
                Built frontend systems that can handle high traffic together with developing API
                connections.
              </li>
              <li>
                Engineered and deployed full-stack applications using Next.js and Nest.js,
                integrating secure Redis-based authentication and managing data with Postgres and
                Drizzle ORM to ensure robust and scalable performance.
              </li>
              <li>
                Collaborated with cross-functional teams to create financial services that use
                blockchain technology.
              </li>
              <li>
                Mentored developers while helping them develop their technical skills throughout the
                group.
              </li>
              <li>Collaborated with developers from diverse cultures.</li>
            </ul>
          </SpecialCard>
          <SpecialCard
            gradientClassName="bg-linear-65 from-teal-300 to-teal-600"
            titleClassName="text-primary"
            logo={<img src={tataLogo.src} alt="tata Logo" />}
            title="Tata"
            subTitle="Senior Software Engineer"
          >
            <ul>
              <li>Developed engineered backend banking services using Java/Spring.</li>
              <li>
                Contributed to develop high reliability Financial systems that consistently achieve
                high levels of stability/performance.
              </li>
              <li>
                Developed and identified improvements in the frontend architectural limitations.
              </li>
              <li>Developed a React boilerplate to standardize form development.</li>
              <li>
                Developed improvements to the code in terms of reusability/maintainability and speed
                for the Front-end.
              </li>
              <li>Facilitated/collaborated with 7 front-end developers.</li>
              <li>
                Facilitated and coordinated fiscal technical alignment meetings for code consistency
                and to improve team collaboration.
              </li>
            </ul>
          </SpecialCard>
          <SpecialCard
            gradientClassName="bg-linear-to-r from-cyan-500 to-blue-500"
            titleClassName="text-secondary"
            logo={<img src={samanepaydarLogo.src} alt="Samane Paydar Logo" />}
            title="Samane Paydar"
            subTitle="Fullstack Developer"
          >
            <ul>
              <li>Developed responsive web interfaces using HTML, CSS, and jQuery.</li>
              <li>Transitioned into backend development using Java and relational databases.</li>
              <li>
                Designed and optimized complex PostgreSQL queries, including pivot operations and
                hierarchical data structures.
              </li>
              <li>Implemented database structures for tree-based relationships.</li>
              <li>Took ownership of both UI implementation and backend data logic.</li>
              <li>Mentored a junior developer and improved development practices.</li>
              <li>
                Contributed to full-cycle development from interface design to database
                implementation.
              </li>
              <li>From Junior Front-end developer to Full-stack developer.</li>
            </ul>
          </SpecialCard>
        </div>
      </div>
    </div>
  );
};
