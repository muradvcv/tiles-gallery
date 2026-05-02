import React from 'react';
import Hero from '@/assets/Banner.png';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';

const Banner = () => {
  return (
    <div className=" mb-10">
      <div className="relative min-h-[70vh]  overflow-hidden">

        {/* Background Image */}
        <Image
          src={Hero}
          alt="Tiles Gallery Banner"
          fill
          priority
          className="object-cover"
        />

     
      
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-2xl pl-8 md:pl-16 text-black z-10">

            <p className="mb-4 text-sm md:text-base border border-white/80 w-fit px-5 py-2 rounded-full backdrop-blur-sm">
              Premium Tiles Collection
            </p>

            <h1 className="text-4xl md:text-4xl font-bold leading-tight mb-6">
              Discover Tiles <br />
              That Define Beauty
            </h1>

            <p className="text-sm md:text-lg text-[#1d6262] max-w-xl leading-8 mb-8">
              Explore our premium tile collection crafted
              for style, durability and timeless elegance.
              Perfect for every modern space.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4">
              <button className="flex items-center gap-2 bg-[#0B1F4D] hover:bg-[#16306d] duration-300 px-8 py-4 rounded-xl text-white font-semibold shadow-lg">
                <Link href={'/all-tiles'}>Browse Now </Link>
                <FaArrowRightLong />
              </button>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;