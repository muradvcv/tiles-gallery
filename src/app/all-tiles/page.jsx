import Image from 'next/image';
import React from 'react';
import { CiSearch } from 'react-icons/ci';

const Alltiles = async () => {
  const res = await fetch("https://tiles-gallery-zeta-one.vercel.app/data.json");
  const tiles = await res.json();
  console.log(tiles);

  // category

  const categoryColors = {
    ceramic: "text-blue-600 bg-blue-100",
    mosaic: "text-cyan-600 bg-cyan-100",
    terracotta: "text-orange-700 bg-orange-100",
    porcelain: "text-gray-800 bg-gray-200",
    patterned: "text-pink-600 bg-pink-100",
    stone: "text-yellow-700 bg-yellow-100",
  };

  return (
    <div className='w-10/12 mx-auto py-8 min-h-screen'>
      {/* head text */}
      <div className='text-center space-y-3'>
        <h1 className=' text-5xl'>All Tiles</h1>
        <p className='text-[#01326dc1]'>Explore our complete collection of primium tiles</p>
      </div>
      {/* search bar */}

      <div className="flex justify-center py-5">
        <div className="join w-full max-w-2xl border rounded-md pl-2 border-gray-400">

          <label className="join-item flex items-center gap-2 w-full 
          border-0 border-b border-gray-300 rounded-none bg-transparent">
            <CiSearch className="text-gray-500" />
            <input
              type="search"
              placeholder="Search tiles..."
              required
              className="w-full bg-transparent outline-none focus:outline-none"
            />
          </label>
          <button className="btn btn-neutral join-item px-6">
            Search
          </button>

        </div>
      </div>

      {/* all tiles */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {tiles.map((topt) => (
                  <div key={topt.id}>
      
                    <div className="bg-white rounded-2xl shadow-md overflow-hidden w-full hover:shadow-xl transition duration-300 flex flex-col h-full">
      
                      {/* Image */}
                      <div className="h-48 w-full overflow-hidden">
                        <Image
                          src={topt.image}
                          alt={topt.title}
                          width={400}
                          height={300}
                          className="w-full h-full object-cover hover:scale-105 transition duration-300"
                        />
                      </div>
      
                      {/* Content */}
                      <div className="p-4 flex flex-col flex-grow">
      
                        <h2 className="text-lg font-semibold text-gray-800 mb-1">
                          {topt.title}
                        </h2>
      
                        <p className="text-sm text-gray-500 line-clamp-2 flex-grow">
                          {topt.description}
                        </p>
      
                        <p
                          className={`text-xs font-semibold mt-2 px-3 py-2 rounded-full w-fit ${categoryColors[topt.category] || "text-gray-600 bg-gray-100"
                            }`}
                        >
                          {topt.category}
                        </p>
      
                        <button className="w-full mt-3 border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
                          View Details
                        </button>
      
                      </div>
                    </div>
      
                  </div>
                ))}
              </div>

    </div>
  );
};

export default Alltiles;