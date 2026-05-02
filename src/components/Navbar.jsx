
import Image from 'next/image';
import React from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import Logo from '@/assets/logo.png'
import Link from 'next/link';
import Navlink from './Navlink';

const Navbar = () => {

 


  return (
    <div className='bg-base-100 '>
      <div className="navbar shadow-sm px-8">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RxHamburgerMenu className='text-2xl'/>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li><Navlink href={'/'}>Home</Navlink></li>
              <li><Navlink href={'/all-tiles'}>All tiles</Navlink></li>
              <li><Navlink href={'/my-profile'}>My Profile</Navlink></li>
              
            </ul>
          </div>
          <div className='flex gap-1 items-center font-semibold '>
            <Link href={'/'}>
              <Image
                src={Logo}
                alt="Logo"
                className="w-10 h-auto"
              />
            </Link>
            <h1 className='text-md md:text-2xl'>Tiles Gallery</h1>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Navlink href={'/'}>Home</Navlink></li>
            <li><Navlink href={'/all-tiles'}>All tiles</Navlink></li>
            <li><Navlink href={'/my-profile'}>My Profile</Navlink></li>
          </ul>
        </div>
        <div className="navbar-end flex gap-2">
          <p className='btn btn-outline btn-info'> <Link href={'/login'}>Login</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;