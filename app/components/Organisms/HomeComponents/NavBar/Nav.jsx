"use client";
import React, { useState } from 'react'
import Phone_Icon from "../../../../assets/Phone_Icon.svg";
import Search_Icon from "../../../../assets/Search_Icon_Nav.svg";
import Hamburger_Icon from "../../../../assets/Hamburger_Icon.svg";
import Close_Icon_SC from "../../../../assets/Close_Icon_SC.svg";
import Image from 'next/image';

export default function Nav() {
  return (
    <div className='flex w-full justify-between align-middle items-center py-5'>
        <span className='font-bold text-xl'>Hello, Ram Krishan</span>
        <div className='flex gap-3'>
          <button>
            <Image src={Phone_Icon} alt="Phone"/>
          </button>
          <button>
            <Image src={Search_Icon} alt="Search"/>
          </button>
          <button>
            <Image src={Hamburger_Icon} alt="Hamburger"/>
          </button>
          
        </div>
    </div>
  )
}
