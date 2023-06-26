import React from 'react';

export const About = () => {
  return (
    <div className="md:pt-24">
      <h4 className="bg-violet-900 text-violet-400 w-max tracking-wide">
        About
      </h4>
      <p className="text-sm md:text-base text-zinc-400 md:leading-8 mt-5">
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
          impactful applications that solve real-world problems and enhance user
          experiences.
        </span>
      </p>
    </div>
  );
};
