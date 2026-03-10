'use client';
import { cn } from '@/lib/utils';
import { Achievements } from '@creativelabfront/ui-creativelab/components/achievements';
import { HeroBase } from '@creativelabfront/ui-creativelab/components/hero-base';
import {
  ExploreButton,
  LearnMoreButton,
} from '@creativelabfront/ui-creativelab/components/hero-buttons';
import { LastJobPosition } from '@creativelabfront/ui-creativelab/components/last-job-position';
import { SkillSet } from '@creativelabfront/ui-creativelab/components/skill-set';
import { Timeline } from '@creativelabfront/ui-creativelab/components/timeline';
import { WhoAmI } from '@creativelabfront/ui-creativelab/components/who-am-I';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useMemo, useRef, useState } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger, SplitText } from 'gsap/all';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim'; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
import { type ISourceOptions } from '@tsparticles/engine';
import { Typography } from '@creativelabfront/ui/components/typography';
import Link from 'next/link';

gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);

const landingRegion = 'section w-full overflow-hidden items-center';

export default function Page() {
  const [init, setInit] = useState(false);

  const moleculesOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          color: '#ffffff',
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const bubblesOptions: ISourceOptions = useMemo(
    () => ({
      fullScreen: false,

      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: 'push',
          },
          onHover: {
            enable: true,
            mode: 'repulse',
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: '#ffffff',
        },
        links: {
          enable: false,
        },
        move: {
          direction: 'none',
          enable: true,
          outModes: {
            default: 'bounce',
          },
          random: false,
          speed: 6,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: 'circle',
        },
        size: {
          value: { min: 5, max: 20 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  const parentContainer = useRef<HTMLDivElement | null>(null);
  const waveRef = useRef<HTMLDivElement | null>(null);
  const achievementParentRef = useRef<HTMLDivElement | null>(null);
  const whoAmIRef = useRef<HTMLDivElement | null>(null);

  useLayoutEffect(() => {
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', () => {});
    let splittedWhoAmIText = SplitText.create('.split', { type: 'words, chars' });

    const featureBadgeTweens: gsap.core.Tween[] = [];

    gsap.utils.toArray('.achievement-shape').forEach((el) => {
      const tween = gsap.to(el as gsap.TweenTarget, {
        y: -20,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: Math.random() * 2,
      });
      featureBadgeTweens.push(tween);
    });

    const glowHighlightTween = gsap.to('.glow-highlight', {
      scale: 3,
      yoyo: true,
      duration: 2,
      repeat: -1,
    });

    featureBadgeTweens.push(glowHighlightTween);

    const achievementBadgeNumberTween = gsap.from('.achievement-badge', {
      textContent: 0,
      duration: 4,
      snap: { textContent: 1 },
    });

    achievementBadgeNumberTween.pause();

    const whoAmIGlowTween = gsap.to('.who-am-I-glow', {
      xPercent: 200,
      yoyo: true,
      duration: 2,
      repeat: -1,
      ease: 'sine.inOut',
    });

    gsap.utils.toArray('.section').forEach((section) => {
      const sectionEl = section as HTMLElement;
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionEl,
          start: '-10% top',
          end: 'bottom',
          onEnter: () =>
            sectionEl.classList.contains('features')
              ? featureBadgeTweens.forEach((tween) => tween.resume())
              : sectionEl.classList.contains('who-am-I') && whoAmIGlowTween.resume(),
          onLeave: () =>
            sectionEl.classList.contains('features')
              ? featureBadgeTweens.forEach((tween) => tween.pause())
              : sectionEl.classList.contains('who-am-I') && whoAmIGlowTween.pause(),
          onEnterBack: () =>
            sectionEl.classList.contains('features')
              ? featureBadgeTweens.forEach((tween) => tween.resume())
              : sectionEl.classList.contains('who-am-I') && whoAmIGlowTween.resume(),
          onLeaveBack: () =>
            sectionEl.classList.contains('features')
              ? featureBadgeTweens.forEach((tween) => tween.pause())
              : sectionEl.classList.contains('who-am-I') && whoAmIGlowTween.pause(),
        },
      });

      if (sectionEl.classList.contains('hero')) {
        tl.fromTo(
          sectionEl.querySelector('.animate-bottom-to-top'),
          { y: 100, opacity: 0 },
          { y: -48, opacity: 1, duration: 1 }
        );
      }

      if (sectionEl.classList.contains('features')) {
        tl.fromTo(
          sectionEl.querySelectorAll('.feature-badge-group'),
          {
            y: 400,
          },
          {
            y: -40,
            duration: 1,
            onComplete: () => {
              achievementBadgeNumberTween.resume();
            },
          }
        );
      }

      if (sectionEl.classList.contains('who-am-I')) {
        tl.fromTo(
          sectionEl.querySelectorAll('.who-am-I-Icon'),
          { scale: 3, left: 30, top: 10 },
          {
            scale: 1,
          }
        );
        tl.from(splittedWhoAmIText.words, { duration: 1, y: 100, autoAlpha: 0, stagger: 0.05 });
      }
      if (sectionEl.classList.contains('special-cards-group')) {
        tl.fromTo(
          sectionEl.querySelectorAll('.special-card'),
          { y: 400 },
          {
            y: 0,
            duration: 0.5,
            stagger: 0.2,
          }
        );
      }
    });

    return () => mm.revert();
  }, []);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <div ref={parentContainer}>
      <div
        className={cn(
          'hero flex flex-col bg-hero-background relative h-screen section',
          landingRegion
        )}
      >
        <div ref={waveRef} className="hero-wave light animate-bottom-to-top" />
        <Particles className="z-0 absolute" id="tsparticles" options={moleculesOptions} />
        <div className="size-full max-w-7xl">
          <HeroBase
            title="Creativity"
            subtitle1="Runs In"
            subtitle2="Our Veins"
            descriptions="Unlocking Tomorrow’s Intelligence"
          >
            <div className="flex flex-col gap-3 flex-start">
              <ExploreButton>
                <Link href="https://www.figma.com/design/q7a5yni8xHPJA6gz3ILge9/cv-creative-lab?node-id=4641-441">
                  View Design Of This Page
                </Link>
              </ExploreButton>
              <LearnMoreButton>Learn More</LearnMoreButton>
            </div>
          </HeroBase>
        </div>
      </div>
      <div
        ref={achievementParentRef}
        className={cn(
          landingRegion,
          'achievement-section',
          'bg-background relative h-screen flex flex-col',
          'features'
        )}
      >
        <div className="absolute size-full flex flex-col items-center justify-center">
          <Image
            className="achievement-shape"
            src="/images/achievement-circle.svg"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[calc(50vh-5%)] left-[calc(50vh+10%)]"
            src="/images/achievement-circle2.svg"
            width={150}
            height={150}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[calc(50vh-15%)] left-[calc(50vh-4%)]"
            src="/images/achievement-circle2.svg"
            width={100}
            height={100}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[calc(50vh-8%)] left-[calc(50vh+10%)]"
            src="/images/achievement-circle2.svg"
            width={120}
            height={120}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[calc(50vh-8%)] left-[calc(50vh+25%)]"
            src="/images/achievement-circle2.svg"
            width={170}
            height={170}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[25vh] left-[calc(50vh+50%)]"
            src="/images/achievement-shape.svg"
            width={170}
            height={170}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[30vh] left-[50vw]"
            src="/images/achievement-shape2.svg"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[70vh] left-[80vw]"
            src="/images/achievement-shape3.svg"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[5vh] left-[10vw]"
            src="/images/achievement-shape4.svg"
            width={200}
            height={200}
            alt=""
          />
          <Image
            className="achievement-shape absolute top-[70vh] left-[40vw]"
            src="/images/achievement-shape5.svg"
            width={70}
            height={70}
            alt=""
          />
        </div>
        <div className="glow-highlight bg-sky-600 size-20 rounded-full blur-3xl absolute left-50 top-[50%]" />
        <div className="glow-highlight bg-sky-300 size-20 rounded-full blur-3xl absolute right-100 top-[30%]" />
        <div className="size-full max-w-7xl flex flex-col justify-center">
          <Achievements
            className={cn('animate-bottom-to-top', 'feature-badge-group')}
            experiences={<span className="achievement-badge">14+</span>}
            projects={<span className="achievement-badge">50+</span>}
            skills={<span className="achievement-badge">30+</span>}
          />
        </div>
      </div>
      <div
        ref={whoAmIRef}
        className={cn(
          landingRegion,
          'bg-background h-screen flex flex-col bg-no-repeat bg-center relative',
          'who-am-I'
        )}
      >
        <div className="who-am-I-glow bg-violet-600 size-40 rounded-full blur-[128px] absolute left-0 top-[50%]" />
        <div className="who-am-I-glow bg-pink-600 size-40 rounded-full blur-[128px] absolute left-[80%] top-[30%]" />

        <div className="size-full max-w-7xl flex flex-col justify-center">
          <WhoAmI>
            <Typography color="primary" weight="bold">
              Who Am I?
            </Typography>
            <Typography className="who-am-I-text split text-center leading-8 px-20" as="div">
              Senior Software Engineer with 10+ years of experience building scalable fintech and
              Web3 applications using React, Next.js, TypeScript, Java Spring, and NestJS.
              Specialized in microservices architecture, secure authentication systems, which
              include OAuth2 and RBAC, and performance optimization. Proven track record of
              enhancing Core Web Vitals while decreasing system latency and constructing
              high-traffic distributed systems for financial environments.
            </Typography>
          </WhoAmI>
          <Image
            className="who-am-I-Icon"
            src="/images/chemistry-table.svg"
            width={160}
            height={160}
            alt=""
          />
        </div>
      </div>
      <div
        className={cn(
          landingRegion,
          'bg-background h-screen flex flex-col bg-no-repeat bg-center relative'
        )}
      >
        <div className="size-full max-w-7xl flex flex-col justify-center">
          <SkillSet />
        </div>
      </div>
      <div
        className={cn(
          landingRegion,
          'bg-background z-1 h-screen flex flex-col bg-no-repeat bg-center relative overflow-hidden'
        )}
      >
        <Particles
          className="absolute z-0 overflow-hidden size-full"
          id="bubbleParticles"
          options={bubblesOptions}
        />
        <div className="bg-pink-600 size-20 rounded-full blur-[100px] absolute right-[20%] top-[50%]" />
        <Image
          className="absolute -left-4 z-0 fade-border"
          src="/images/earlener-flask-cartoons-big.svg"
          alt=""
          width={540}
          height={540}
        />
        <div className="size-full max-w-7xl flex flex-col justify-center">
          <LastJobPosition />
        </div>
      </div>
      <div
        className={cn(
          landingRegion,
          'bg-background flex flex-col bg-no-repeat bg-center relative',
          'special-cards-group'
        )}
      >
        <div className="size-full max-w-7xl flex flex-col justify-center">
          <Image
            className="top-0 left-0 absolute"
            src="/images/wave-top.svg"
            alt=""
            width={200}
            height={100}
          />
          <Image
            className="bottom-0 right-0 absolute"
            src="/images/wave-bottom.svg"
            alt=""
            width={200}
            height={100}
          />
          <Timeline cardClassName="special-card" />
        </div>
      </div>
    </div>
  );
}
