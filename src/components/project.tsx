import { HiOutlineExternalLink } from 'react-icons/hi';
import Link from 'next/link';
import React from 'react';

export interface ProjectProps {
  name: string;
  description: string;
  github_url: string;
  technologies: string[];
}

export const Project = ({
  name,
  description,
  github_url,
  technologies,
}: ProjectProps) => {
  return (
    <Link
      href={github_url}
      target="_blank"
      className="mt-5 block p-3 hover:bg-gray-600 rounded-md hover:bg-clip-padding hover:backdrop-filter hover:backdrop-blur-sm hover:bg-opacity-10 group"
    >
      <div className='flex items-center gap-3'>
        <h4 className="text-zinc-200">{name}</h4>
        <HiOutlineExternalLink className='text-zinc-400 h-4 w-4 group-hover:text-yellow-400 group-hover:scale-125 transition duration-300 transform'/>
      </div>
      <p className="text-xs text-zinc-400 mt-2">{description}</p>
      <ul className="flex gap-3 mt-4 flex-wrap">
        {technologies.map((technology) => (
          <li
            key={technology}
            className="text-xs text-yellow-400 p-2 bg-yellow-900 rounded-full"
          >
            {technology}
          </li>
        ))}
      </ul>
    </Link>
  );
};
