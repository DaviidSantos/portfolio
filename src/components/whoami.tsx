import Link from 'next/link';
import React from 'react';
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import luffy from '@/assets/luffy.jpg';
import Image from 'next/image';

export const WhoAmI = () => {
  return (
    <section className="py-24 text-center md:text-left">
      <div>
        <h1 className="text-zinc-200 text-5xl font-bold">David Santos</h1>
        <h3 className="text-zinc-400 text-xl font-medium mt-2">
          Software Developer
        </h3>
        <p className="text-zinc-400 mt-4 md:max-w-[340px] text-sm">
          I build impactful applications that solve real-world problems and enhance user experiences.
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

        <div className="mt-14 flex gap-7 justify-center md:justify-start">
          <Image
            src={luffy}
            alt="luffy"
            className="w-[85px] h-[85px] object-cover object-center"
          />
          <div>
            <p className="max-w-[150px] text-zinc-200 text-xs">
              &ldquo;minami no shima wa atta ke-e paina purupuru atama pokopoko
              aho baka&rdquo;
            </p>
            <p className="text-zinc-200 text-xs mt-3">- Monkey D. Luffy</p>
          </div>
        </div>
      </div>
    </section>
  );
};
