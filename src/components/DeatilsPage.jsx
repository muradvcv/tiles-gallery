"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const DeatilsPage = ({ til }) => {
  const [qty, setQty] = useState(1);

  const categoryColors = {
    ceramic: "text-blue-600 bg-blue-100",
    mosaic: "text-cyan-600 bg-cyan-100",
    terracotta: "text-orange-700 bg-orange-100",
    porcelain: "text-gray-800 bg-gray-200",
    patterned: "text-pink-600 bg-pink-100",
    stone: "text-yellow-700 bg-yellow-100",
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <Link href={'/all-tiles'}>
        <button className="btn btn-outline btn-primary">
          <span>View all</span>
        </button>
      </Link>
      <div className="grid md:grid-cols-2 gap-8 bg-white p-6 rounded-2xl shadow-xl">

        <div>
          <Image
            src={til.image}
            alt={til.title}
            width={600}
            height={420}
            className="w-full object-cover h-[60vh] rounded-xl"
          />

        </div>

        <div className="space-y-5">

          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-semibold">{til.title}</h1>
            <button className="text-gray-400 text-xl">♡</button>
          </div>

          {/* price */}
          <p className="text-blue-600 text-xl font-bold">
            ${til.price}{" "}
            <span className="text-sm text-gray-500">/ unit</span>
          </p>

          {/* description */}
          <p className="text-gray-600">{til.description}</p>

          {/* info */}
          <div className="grid grid-cols-2 gap-4 text-sm">
            <p><span className="font-medium">Material:</span> {til.material}</p>
            <p><span className="font-medium">Dimensions:</span> {til.dimensions}</p>
            <p><span className="font-medium">Creator:</span> {til.creator}</p>
            <p
              className={`text-xs font-semibold mt-2 px-3 py-2 rounded-full w-fit ${categoryColors[til.category] || "text-gray-600 bg-gray-100"
                }`}
            >
              {til.category}
            </p>

          </div>

          {/* tags */}
          <div>
            <p className="font-medium mb-2">Tags</p>
            <div className="flex flex-wrap gap-2">
              {til.tags?.map((tag, i) => (
                <span
                  key={i}
                  className="px-3 py-1 text-sm bg-gray-100 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQty(qty > 1 ? qty - 1 : 1)}
                className="px-3 py-1"
              >
                -
              </button>
              <span className="px-4">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="px-3 py-1"
              >
                +
              </button>
            </div>

            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg flex-1">
              Add to Cart
            </button>
          </div>

          {/* buy now */}
          <button className="w-full border py-2 rounded-lg">
            Buy Now
          </button>

          {/* footer */}
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <span className="text-green-600">
              {til.inStock ? "✅ In Stock" : "❌ Out of Stock"}
            </span>
            <span>• Free Delivery</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DeatilsPage;