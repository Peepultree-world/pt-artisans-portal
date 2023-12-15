"use client";

import React from 'react'
import Button from '../../../Atoms/Button/Button'
import Image from 'next/image'
import Login_Asset from "../../../../assets/Login_Asset.svg";
import { BUTTON_TYPE } from '@/app/lib/constants';

export default function PhoneNumber() {
  return (
    <>
    <Image className="mt-4" src={Login_Asset} alt="logo" />
      <input className="mt-[35px] w-full placeholder-Text-secondary font-semibold text-sm selection:border-[1px] focus:border-Border-primary rounded-[4px] py-3 px-5" placeholder="Enter Mobile number" />
      <Button
        disabled={false}
        btnText={"Get OTP"}
        // type="submit"
        btnType={BUTTON_TYPE.PRIMARY}
        className={"w-full mt-[15px]"}
      />
      <div className="flex justify-evenly align-middle items-center w-full my-[25px]">
        <span className="border-[0.5px] w-full border-Border-primary"></span>
        <span className="mx-6">OR</span>
        <span className="border-[0.5px] w-full border-Border-primary"></span>
      </div>
      <div className="inline justify-start text-start font-normal text-sm">
        New Artisan? Please fill the forum and our team will get back to you. <a href="#" className="font-bold underline">Fill Forum</a>
      </div>
      </>
  )
}
