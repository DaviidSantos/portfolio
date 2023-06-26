import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';

export const WhoAmI = () => {
  return (
    <section className="flex flex-col text-center md:text-left md:grid grid-cols-2 w-full gap-3">
      <div>
        <h1 className="text-zinc-200 text-5xl font-bold">David Santos</h1>
        <h3 className="text-zinc-400 text-xl font-medium mt-2">
          Software Developer
        </h3>
        <p className="text-zinc-400 mt-2 md:max-w-xs">
          I build accessible, inclusive products and digital experiences for the
          web.
        </p>

        <div className="flex justify-center md:justify-start gap-5 mt-7">
          <Link href="https://github.com/DaviidSantos" target="_blank">
            <BsGithub className="h-6 w-6 text-zinc-300 hover:text-white" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/daavidpsantos/"
            target="_blank"
          >
            <BsLinkedin className="h-6 w-6 text-zinc-300 hover:text-white" />
          </Link>
        </div>
      </div>

      <div className="mt-7 md:mt-0">
        <p className="text-sm md:text-base text-zinc-400 md:leading-8">
          Hello, I&#8217;m David Santos, a{' '}
          <span className="text-zinc-100 font-medium">
            passionate software developer
          </span>{' '}
          based in Brazil. Currently pursuing a degree in Systems Analysis and
          Development, I am dedicated to honing my skills and expanding my
          knowledge in the world of technology. With a keen interest in{' '}
          <span className="text-zinc-100 font-medium">
            coding, science, and languages
          </span>
          , I find joy in the art of crafting elegant and efficient solutions
          through software development. I strive to create{' '}
          <span className="text-zinc-100 font-medium">
            impactful applications that solve real-world problems and enhance
            user experiences.
          </span>
        </p>
      </div>
    </section>
  );
};
