"use client";
import React from 'react'
import PT_Logo from "../assets/PT_Logo.svg";
import Image from 'next/image';
import PhoneNumberComponent from '../components/Organisms/LoginComponents/PhoneNumber/PhoneNumber'
import OTP from '../components/Organisms/LoginComponents/OTP/OTP';

export default function Login() {
  return (
    <div className="min-h-screen h-full max-w-md px-[22px] lg:mx-auto justify-center py-10 align-middle items-center bg-Background-primary text-center flex flex-col">
      <Image src={PT_Logo} alt="logo" />
      {/* <PhoneNumberComponent/> */}
      <OTP/>
    </div>
  )
}