import Image from 'next/image';
import React from 'react';
import Marquee from 'react-fast-marquee';

const TopGenaration = async () => {
  const res = await fetch("https://tiles-gallery-zeta-one.vercel.app/data.json");
  const tiles = await res.json();
  const topTiles = tiles.slice(0, 4);

  console.log(topTiles);

  return (
    <div className=''>

      <div className='flex items-center gap-4 bg-[#F5F5F5] py-2 px-5 rounded-md'>

        <button className='btn bg-[#D72050] text-white'>
          New Arrivals
        </button>

        <Marquee className="bg-[#F5F5F5] py-2 px-5 rounded-md text-sm font-medium">
          New Arrivals :   {topTiles.map(t => t.title).join(", ")} {" | "}
          Weekly Feature: Modern Geometric Patterns {" | "}
          Join the Community...
        </Marquee>

      </div>

      <div className='w-10/12 mx-auto min-h-[60vh] py-10 '>
        <h1 className='text-4xl font-semibold mb-5'>Featured Tiles:</h1>
        <div className='grid grid-cols-4 gap-5'>
          {
            topTiles.map(topt => <div key={topt.id}>

              <div className="bg-white rounded-2xl shadow-md overflow-hidden w-72 hover:shadow-xl transition duration-300">

                {/* Image */}
                <div className="h-48 w-full overflow-hidden">
                  <Image
                    width={300}
                    height={300}
                    src={topt.image}
                    alt='' />
                </div>

                {/* Content */}
                <div className="p-4 space-y-2">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {topt.title}
                  </h2>

                  <p className="text-sm text-gray-500 line-clamp-2">
                    {topt.description}
                  </p>

                  {/* Price (optional add korte paro) */}
                  <p className="text-md font-bold text-gray-900">
                    {topt.price}$
                  </p>

                  {/* Button */}
                  <button className="w-full mt-2 border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
                    View Details
                  </button>
                </div>
              </div>

            </div>)
          }
        </div>

      </div>


    </div>
  );
};

export default TopGenaration;