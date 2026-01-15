import { Carousel, CarouselContent, CarouselItem } from '@creativelabfront/ui/components/carousel';
import { Typography } from '@creativelabfront/ui/components/typography';
import js_url from '../assets/images/skills/js.svg';
import react_url from '../assets/images/skills/react.svg';
import html_url from '../assets/images/skills/html.svg';
import css_url from '../assets/images/skills/css.svg';
import ts_url from '../assets/images/skills/ts.svg';
import tailwindcss_url from '../assets/images/skills/tailwindcss.svg';
import vue_url from '../assets/images/skills/vue.svg';
import electron_url from '../assets/images/skills/electron.svg';
import redux_url from '../assets/images/skills/redux.svg';
import node_url from '../assets/images/skills/node.svg';
import nest_url from '../assets/images/skills/nest.svg';
import postgres_url from '../assets/images/skills/postgres.svg';
import mongo_url from '../assets/images/skills/mongo.svg';
import java_url from '../assets/images/skills/java.svg';
import python_url from '../assets/images/skills/python.svg';
import pytorch_url from '../assets/images/skills/pytorch.svg';
import gitlab_url from '../assets/images/skills/gitlab.svg';
import github_url from '../assets/images/skills/github.svg';
import docker_url from '../assets/images/skills/docker.svg';
import kuber_url from '../assets/images/skills/kuber.svg';
import svn_url from '../assets/images/skills/svn.svg';
import AutoScroll from 'embla-carousel-auto-scroll';
import { cn } from '../lib/utils.js';

const FrontEnd_Skills = [
  { title: 'JS', imgUrl: js_url },
  { title: 'React', imgUrl: react_url },
  { title: 'HTML', imgUrl: html_url },
  { title: 'TypeScript', imgUrl: ts_url },
  { title: 'TailwindCSS', imgUrl: tailwindcss_url },
  { title: 'Electron', imgUrl: electron_url },
  { title: 'Redux', imgUrl: redux_url },
  { title: 'CSS', imgUrl: css_url },
  { title: 'Vue', imgUrl: vue_url },
];

const BackEnd_Skills = [
  { title: 'Node', imgUrl: node_url },
  { title: 'Nest', imgUrl: nest_url },
  { title: 'Postgres', imgUrl: postgres_url },
  { title: 'MongoDB', imgUrl: mongo_url },
  { title: 'Java', imgUrl: java_url },
  { title: 'Python', imgUrl: python_url },
  { title: 'Pytorch', imgUrl: pytorch_url },
];

const DevOps_Skills = [
  { title: 'Gitlab', imgUrl: gitlab_url },
  { title: 'Github', imgUrl: github_url },
  { title: 'Docker', imgUrl: docker_url },
  { title: 'Kubernetes', imgUrl: kuber_url },
  { title: 'svn', imgUrl: svn_url },
];

const contentStyle = 'border-none! md:basis-1/2 lg:basis-1/3';
const skillLogo = 'px-4 py-10';

export const SkillSet = () => {
  return (
    <div className="flex flex-col justify-center">
      <Typography className="mb-6 text-left" variant="large">
        My Skill Set
      </Typography>
      <Carousel
        className="w-full"
        plugins={[AutoScroll({ playOnInit: true, speed: 2, stopOnInteraction: false })]}
        opts={{
          align: 'center',
          loop: true,
        }}
      >
        <CarouselContent>
          {FrontEnd_Skills.map((item) => (
            <CarouselItem key={item.title} className={cn(contentStyle)}>
              <div className={skillLogo}>
                <img src={item.imgUrl} alt={item.title} className="h-16 w-16" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        className="w-full"
        plugins={[
          AutoScroll({
            playOnInit: true,
            direction: 'backward',
            speed: 3,
            stopOnInteraction: false,
          }),
        ]}
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {BackEnd_Skills.map((item) => (
            <CarouselItem key={item.title} className={cn(contentStyle)}>
              <div className={skillLogo}>
                <img src={item.imgUrl} alt={item.title} className="h-16 w-16" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
      <Carousel
        plugins={[AutoScroll({ playOnInit: true, speed: 1.6, stopOnInteraction: false })]}
        className="w-full"
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {DevOps_Skills.map((item) => (
            <CarouselItem key={item.title} className={contentStyle}>
              <div className={skillLogo}>
                <img src={item.imgUrl} alt={item.title} className="h-16 w-16" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};
