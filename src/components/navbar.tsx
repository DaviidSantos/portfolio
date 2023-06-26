import Link from 'next/link';
import React from 'react';

const navItems = [
  {
    key: 'nav_01',
    title: 'About',
    path: './',
  },
  {
    key: 'nav_02',
    title: 'Articles',
    path: './articles',
  },
  {
    key: 'nav_03',
    title: 'Projects',
    path: './projects',
  },
];

export const Navbar = () => {
  return (
    <nav className="py-4">
      <ul className="flex justify-center sm:justify-end gap-10">
        {navItems.map((item) => (
          <li key={item.key}>
            <Link
              href={item.path}
              className="text-zinc-400 text-sm hover:border-b border-b-zinc-400 pb-1"
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
