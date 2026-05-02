"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
  const pathname=usePathname();
  const isActive=href==pathname;
  return (
    <Link href={href} className={`${isActive?"border-b-2 border-b-[#0044d5] text-red-600 shadow-2xl":""}`}>
      {children}
    </Link>
  );
};

export default Navlink;