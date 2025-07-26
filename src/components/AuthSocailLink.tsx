
import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaXTwitter } from 'react-icons/fa6';

export const AuthSocailLink = () => {
  return (
    <div className="w-full">
      {/* Social Buttons */}
      <div className="w-full flex justify-center gap-4  mb-4">
        <button className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
          <FcGoogle className="text-xl" />
        </button>

        <button className="bg-[#1877F2] text-white border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
          <FaFacebook className="text-xl" />
        </button>

        <button className="border border-gray-200 rounded-lg p-3 hover:shadow-md transition">
          <FaXTwitter className="text-xl text-black" />
        </button>
      </div>

      {/* Signup Link */}
      <div className="text-center text-[14px] leading-[20px] font-light">
        Don’t have an account?{' '}
        <a href="#" className="font-semibold text-blue-600 hover:underline">
          Sign Up
        </a>
      </div>
    </div>
  );
};
