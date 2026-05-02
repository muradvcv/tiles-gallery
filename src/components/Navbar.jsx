"use client";
import Image from "next/image";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import Logo from "@/assets/logo.png";
import Link from "next/link";
import Navlink from "./Navlink";
import { authClient } from "@/lib/auth-client";
import { TbLogout } from "react-icons/tb";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

 
  const handleLogout = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-base-100">
      <div className="navbar shadow-sm px-8">
        {/* LEFT */}
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <RxHamburgerMenu className="text-2xl" />
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li><Navlink href="/">Home</Navlink></li>
              <li><Navlink href="/all-tiles">All tiles</Navlink></li>
              <li><Navlink href="/my-profile">My Profile</Navlink></li>
            </ul>
          </div>

          <div className="flex gap-1 items-center font-semibold">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-10 h-auto" />
            </Link>
            <h1 className="text-md md:text-2xl whitespace-nowrap">
              Tiles Gallery
            </h1>
          </div>
        </div>

        {/* CENTER */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Navlink href="/">Home</Navlink></li>
            <li><Navlink href="/all-tiles">All tiles</Navlink></li>
            <li><Navlink href="/my-profile">My Profile</Navlink></li>
          </ul>
        </div>

        {/* RIGHT */}
        <div className="navbar-end flex gap-3 items-center">
          {user ? (
            <div className="flex items-center gap-3">
              <Image
                src={user?.image || "/default-user.png"}
                width={40}
                height={40}
                alt="user"
                className="w-10 h-10 rounded-full object-cover"
              />
              <button
                onClick={handleLogout}
                className="btn btn-outline btn-error btn-sm"
              >
                Logout
                <span><TbLogout /></span>
              </button>
            </div>
          ) : (
            <Link href="/login">
              <button className="btn btn-outline btn-info">
                Login
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;