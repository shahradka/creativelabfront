import { Typography } from '@creativelabfront/ui/components/typography';

export const WhoAmI = () => {
  return (
    <div className="flex">
      <div className="flex flex-col px-10 items-center gap-2 font-lora italic basis-1/2">
        <Typography color="primary" weight="bold">
          Who Am I?
        </Typography>
        <Typography className="text-center leading-8" as="div">
          A senior software engineer with 10+ years of experience specializing in JavaScript and
          Java. Skilled in building scalable applications, optimizing performance, and leading
          international teams. Strong background in payment systems, web3 projects, and
          enterprise-level applications. Experienced in NestJS, Node.js, React, Nextjs, PostgreSQL,
          MongoDB, Docker, Kubernetes, Microservices, CI/CD.
        </Typography>
      </div>
      <div className="flex flex-col px-10 items-center gap-2 font-lora italic  basis-1/2"></div>
    </div>
  );
};
