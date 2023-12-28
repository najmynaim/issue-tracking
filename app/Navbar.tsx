'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { SiPivotaltracker } from 'react-icons/si';
import classnames from 'classnames';

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: 'Dashboard', href: '/dashboard' },
    { label: 'Issues', href: '/issues' },
  ];

  return (
    <nav className='flex space-x-6 items-center max-container padding-container relative z-30 py-5'>
      <Link href='/'>
        <SiPivotaltracker size={32} />
      </Link>
      <ul className='flex space-x-6'>
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              'text-zinc-900': link.href === currentPath,
              'text-zinc-500': link.href !== currentPath,
              'hover:text-zinc-800 transition-colors': true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
