"use client";
import { authClient } from "@/lib/auth-client";
import React from "react";
import Image from "next/image";
import EditUser from "@/components/EditUser";

const MyProfile = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  if (!user) {
    return (
      <p className="text-center mt-10 min-h-screen text-lg font-semibold ">
        NO USER FOUND!
      </p>
    );
  }

  return (
    <div className="w-11/12 md:w-8/12 lg:w-6/12 mx-auto min-h-[70vh] flex items-center justify-center">

      <div className="bg-base-100 shadow-xl rounded-2xl p-8 text-center w-full border border-gray-200">

        {/* Profile Image */}
        <div className="flex justify-center">
          <Image
            src={user.image}
            width={150}
            height={150}
            alt="user"
            className="w-36 h-36 rounded-full object-cover border-4 border-info shadow-md"
          />
        </div>

        {/* Name */}
        <h1 className="text-3xl font-bold mt-6">
          {user.name || "No Name"}
        </h1>

        {/* Email */}
        <p className="text-gray-500 mt-2">
          {user.email}
        </p>
        {/* Button */}
       <EditUser/>
      </div>
    </div>
  );
};

export default MyProfile;