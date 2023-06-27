import React from 'react';

export const Technologies = () => {
  return (
    <section className='py-6 p-3'>
      <h4 className="bg-cyan-900 text-cyan-400 w-max tracking-wide">
        Technologies
      </h4>
      <ul className="mt-5 flex flex-col gap-2">
        <li className="text-zinc-300 text-sm tracking-wider">TypeScript</li>
        <li className="text-zinc-300 text-sm tracking-wider">JavaScript</li>
        <li className="text-zinc-300 text-sm tracking-wider">Next.js</li>
        <li className="text-zinc-300 text-sm tracking-wider">React.js</li>
        <li className="text-zinc-300 text-sm tracking-wider">TailwindCSS</li>
        <li className="text-zinc-300 text-sm tracking-wider">Node.js</li>
        <li className="text-zinc-300 text-sm tracking-wider">Express.js</li>
      </ul>
    </section>
  );
};
