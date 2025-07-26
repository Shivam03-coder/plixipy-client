"use client";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { VscLock } from "react-icons/vsc";
import { HiOutlineMail } from "react-icons/hi";
import { AuthSocailLink } from "../../../../components/AuthSocailLink";

export function LoginForm() {
  return (
    <div className="flex w-[361px] flex-col items-center space-y-6">
      {/* Heading */}
      <h2 className="font-inter text-center text-[32px] leading-[48px] font-semibold tracking-[0.8px] text-[#1C1C1C]">
        Login to Cohorts
      </h2>

      {/* Form */}
      <form className="flex w-full flex-col space-y-5">
        {/* Email Field */}
        <div className="flex h-[48px] flex-col space-y-1">
          <label className="text-gray-600" htmlFor="email">
            Email
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-xl text-gray-400">
              <HiOutlineMail />
            </span>
            <Input
              id="email"
              type="email"
              required
              className="h-[30px] pl-10 text-base"
              placeholder="Enter your e-mail"
            />
          </div>
        </div>

        {/* Password Field */}
        <div className="flex flex-col space-y-1">
          <label className="text-gray-600" htmlFor="password">
            Password
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-3 flex items-center text-xl text-gray-400">
              <VscLock />
            </span>
            <Input
              id="password"
              type="password"
              required
              className="pl-10 text-base"
              placeholder="Enter your password"
            />
          </div>
        </div>

        {/* Login Button */}
        <Button className="bg-primary h-[48px] w-full hover:bg-purple-700">
          Login
        </Button>
      </form>

      {/* Forgot Password */}
      <div className="w-full text-right text-sm">
        <a href="#" className="text-gray-500 hover:underline">
          Forgot Password
        </a>
      </div>

      {/* Social Buttons */}
      <AuthSocailLink />
    </div>
  );
}
