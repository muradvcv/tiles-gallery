"use client"
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye } from 'react-icons/fa6';
import { FcGoogle } from 'react-icons/fc';
import { IoMdEyeOff } from 'react-icons/io';

const LoginPage = () => {

  const {register,handleSubmit,watch,formState: { errors },} = useForm()

  const handleLogin = (data) => {
    
  }



  const [showpass, setShowpass] = useState(false)
  return (
    <div className='w-10/12 mx-auto  min-h-[90vh] flex justify-center items-center rounded-2xl my-10'>
      <div className='bg-white w-120 shadow-md rounded-xl p-10 space-y-2 border border-gray-200'>
        <h1 className='text-2xl text-center font-semibold pb-5 border-b border-b-gray-300'>Login your account</h1>

        <form action="" onSubmit={handleSubmit(handleLogin)}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-[1rem]">Email</legend>

            <input type="email"
              className="input focus:border-none w-full"
              placeholder="Enter your email address"
              {...register("email", { required: true })}

            />
            {errors.email && <span className='text-red-500'>This field is required</span>}


          </fieldset>

          <fieldset className="fieldset relative">
            <legend className="fieldset-legend text-[1rem]">Password</legend>

            <input type={showpass ? "text" : "password"}
              className="input focus:border-none w-full"
              placeholder="Enter your Password"
              {...register("password", { required: true })}
              
            />
            {errors.password && <span className='text-red-500'>This field is required</span>}

            <span className='absolute right-2 top-4.5' onClick={() => setShowpass(!showpass)}>{showpass ? <FaEye /> : <IoMdEyeOff />}</span>
          </fieldset>

          <button className='w-full btn btn-neutral my-5'>Login</button>
        </form>
        <p className='text-center'>or</p>

        <div className='flex items-center gap-2 font-semibold text-gray-500 hover:text-black duration-200 py-2 border border-gray-400 rounded-full justify-center shadow'>
          <FcGoogle />
          <p>continue with Google</p>
        </div>
        <div className='flex gap-2 font-semibold'>
          <h1 >Dont’t Have An Account ?</h1>
          <h1 className='text-[#f63131] underline'><Link href={'/register'}>Register</Link></h1>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;