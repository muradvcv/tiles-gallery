"use client";

import React, { useState } from "react";
import SarchBar from "./SarchBar";
import Image from "next/image";
import Link from "next/link";

const SarchWrapper = ({ tiles }) => {

  const [inputValue, setInputValue] = useState("");
  const [search, setSearch] = useState("");

  const categoryColors = {
    ceramic: "text-blue-600 bg-blue-100",
    mosaic: "text-cyan-600 bg-cyan-100",
    terracotta: "text-orange-700 bg-orange-100",
    porcelain: "text-gray-800 bg-gray-200",
    patterned: "text-pink-600 bg-pink-100",
    stone: "text-yellow-700 bg-yellow-100",
  };

  const filteredTiles = search
    ? tiles.filter(tile =>
      tile.title.toLowerCase().includes(search.toLowerCase())
    )
    : [];

  return (
    <div className='w-10/12 mx-auto py-8'>

      {/* heading */}
      <div className='text-center space-y-3 mb-5'>
        <h1 className='text-5xl'>All Tiles</h1>
        <p className='text-[#01326dc1]'>
          Explore our complete collection of premium tiles
        </p>
      </div>

      {/* search */}
      <SarchBar
        inputValue={inputValue}
        setInputValue={setInputValue}
        onSearch={() => setSearch(inputValue)}
      />

      {/* result grid */}
      {search !== "" && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-6">

          {filteredTiles.length > 0 ? (
            filteredTiles.map((topt) => (
              <div
                key={topt.id}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition duration-300 flex flex-col h-full"
              >

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

                  {/* Category */}
                  <p
                    className={`text-xs font-semibold mt-2 px-3 py-1 rounded-full w-fit ${categoryColors[topt.category]}`}
                  >
                    {topt.category}
                  </p>

                  {/* Button */}
                  <Link href={`/all-tiles/${topt.id}`}>
                    <button className="w-full mt-3 border border-gray-300 rounded-lg py-2 text-sm font-medium hover:bg-gray-100 transition">
                      View Details
                    </button>
                  </Link>

                </div>
              </div>
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No tiles found 😢
            </p>
          )}

        </div>
      )}

    </div>
  );
};

export default SarchWrapper;